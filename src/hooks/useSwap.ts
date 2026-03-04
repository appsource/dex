import { useState, useCallback } from 'react'
import { useAccount, useChainId, useWriteContract, usePublicClient } from 'wagmi'
import { parseUnits, formatUnits, type Hex } from 'viem'
import { useStorageConfig } from './useStorageConfig'
import { isV3Mode, type ChainContracts } from '../storage/types'

// QuoterV2 ABI (quoteExactInputSingle only)
const QUOTER_V2_ABI = [
  {
    inputs: [
      {
        components: [
          { name: 'tokenIn', type: 'address' },
          { name: 'tokenOut', type: 'address' },
          { name: 'amountIn', type: 'uint256' },
          { name: 'fee', type: 'uint24' },
          { name: 'sqrtPriceLimitX96', type: 'uint160' },
        ],
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'quoteExactInputSingle',
    outputs: [
      { name: 'amountOut', type: 'uint256' },
      { name: 'sqrtPriceX96After', type: 'uint160' },
      { name: 'initializedTicksCrossed', type: 'uint32' },
      { name: 'gasEstimate', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const

// SwapRouter02 ABI (exactInputSingle only)
const SWAP_ROUTER_ABI = [
  {
    inputs: [
      {
        components: [
          { name: 'tokenIn', type: 'address' },
          { name: 'tokenOut', type: 'address' },
          { name: 'fee', type: 'uint24' },
          { name: 'recipient', type: 'address' },
          { name: 'amountIn', type: 'uint256' },
          { name: 'amountOutMinimum', type: 'uint256' },
          { name: 'sqrtPriceLimitX96', type: 'uint160' },
        ],
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'exactInputSingle',
    outputs: [{ name: 'amountOut', type: 'uint256' }],
    stateMutability: 'payable',
    type: 'function',
  },
] as const

// ERC20 approve ABI
const ERC20_ABI = [
  {
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const

// Common fee tiers for V3
export const FEE_TIERS = [100, 500, 3000, 10000] as const
export type FeeTier = (typeof FEE_TIERS)[number]

export interface SwapState {
  tokenIn: string
  tokenOut: string
  amountIn: string
  amountOut: string
  feeTier: FeeTier
  loading: boolean
  error: string | null
  txHash: string | null
}

export function useSwap() {
  const { address } = useAccount()
  const chainId = useChainId()
  const { config } = useStorageConfig()
  const publicClient = usePublicClient()
  const { writeContractAsync } = useWriteContract()

  const [state, setState] = useState<SwapState>({
    tokenIn: '',
    tokenOut: '',
    amountIn: '',
    amountOut: '',
    feeTier: 3000,
    loading: false,
    error: null,
    txHash: null,
  })

  const contracts: ChainContracts = config?.contracts?.[String(chainId)] || {}

  const getQuote = useCallback(
    async (params: {
      tokenIn: string
      tokenInDecimals: number
      tokenOut: string
      amountIn: string
      fee: FeeTier
    }) => {
      if (!contracts.quoter || !publicClient) return null
      if (!isV3Mode(contracts)) return null

      try {
        const amountInWei = parseUnits(params.amountIn, params.tokenInDecimals)

        // quoteExactInputSingle is a view that requires simulation
        const result = await publicClient.simulateContract({
          address: contracts.quoter as Hex,
          abi: QUOTER_V2_ABI,
          functionName: 'quoteExactInputSingle',
          args: [
            {
              tokenIn: params.tokenIn as Hex,
              tokenOut: params.tokenOut as Hex,
              amountIn: amountInWei,
              fee: params.fee,
              sqrtPriceLimitX96: BigInt(0),
            },
          ],
        })

        return result.result[0] // amountOut
      } catch (err) {
        console.error('[useSwap] getQuote error:', err)
        return null
      }
    },
    [contracts, publicClient]
  )

  const executeSwap = useCallback(
    async (params: {
      tokenIn: string
      tokenInDecimals: number
      tokenOut: string
      tokenOutDecimals: number
      amountIn: string
      amountOutMinimum: bigint
      fee: FeeTier
      slippageBps?: number // basis points, default 50 = 0.5%
    }) => {
      if (!address || !contracts.router) {
        throw new Error('Wallet not connected or router not configured')
      }
      if (!isV3Mode(contracts)) {
        throw new Error('V3 router not configured for this chain')
      }

      const amountInWei = parseUnits(params.amountIn, params.tokenInDecimals)
      const slippage = params.slippageBps ?? 50
      const minOut = (params.amountOutMinimum * BigInt(10000 - slippage)) / BigInt(10000)

      // Step 1: Approve
      const approveTx = await writeContractAsync({
        address: params.tokenIn as Hex,
        abi: ERC20_ABI,
        functionName: 'approve',
        args: [contracts.router as Hex, amountInWei],
      })

      if (!publicClient) throw new Error('No public client')
      await publicClient.waitForTransactionReceipt({ hash: approveTx })

      // Step 2: Swap
      const swapTx = await writeContractAsync({
        address: contracts.router as Hex,
        abi: SWAP_ROUTER_ABI,
        functionName: 'exactInputSingle',
        args: [
          {
            tokenIn: params.tokenIn as Hex,
            tokenOut: params.tokenOut as Hex,
            fee: params.fee,
            recipient: address,
            amountIn: amountInWei,
            amountOutMinimum: minOut,
            sqrtPriceLimitX96: BigInt(0),
          },
        ],
      })

      return swapTx
    },
    [address, contracts, publicClient, writeContractAsync]
  )

  return { state, setState, getQuote, executeSwap, contracts, chainId }
}
