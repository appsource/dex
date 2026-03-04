import { useState } from 'react'
import { useAccount, useChainId, useWriteContract, usePublicClient } from 'wagmi'
import { parseUnits, type Hex } from 'viem'
import { useStorageConfig } from '../../hooks/useStorageConfig'
import { isV3Mode } from '../../storage/types'

// NonfungiblePositionManager ABI (mint only)
const POSITION_MANAGER_ABI = [
  {
    inputs: [
      {
        components: [
          { name: 'token0', type: 'address' },
          { name: 'token1', type: 'address' },
          { name: 'fee', type: 'uint24' },
          { name: 'tickLower', type: 'int24' },
          { name: 'tickUpper', type: 'int24' },
          { name: 'amount0Desired', type: 'uint256' },
          { name: 'amount1Desired', type: 'uint256' },
          { name: 'amount0Min', type: 'uint256' },
          { name: 'amount1Min', type: 'uint256' },
          { name: 'recipient', type: 'address' },
          { name: 'deadline', type: 'uint256' },
        ],
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'mint',
    outputs: [
      { name: 'tokenId', type: 'uint256' },
      { name: 'liquidity', type: 'uint128' },
      { name: 'amount0', type: 'uint256' },
      { name: 'amount1', type: 'uint256' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
] as const

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
] as const

// Default tick range for full range position
const TICK_LOWER = -887220
const TICK_UPPER = 887220

export default function PoolWidget() {
  const { address, isConnected } = useAccount()
  const chainId = useChainId()
  const { config } = useStorageConfig()
  const { writeContractAsync } = useWriteContract()
  const publicClient = usePublicClient()

  const [token0, setToken0] = useState('')
  const [token1, setToken1] = useState('')
  const [amount0, setAmount0] = useState('')
  const [amount1, setAmount1] = useState('')
  const [fee, setFee] = useState(3000)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [txHash, setTxHash] = useState<string | null>(null)

  const contracts = config?.contracts?.[String(chainId)] || {}
  const v3Available = isV3Mode(contracts)

  const handleAddLiquidity = async () => {
    if (!address || !contracts.positionManager) return

    setLoading(true)
    setError(null)
    setTxHash(null)

    try {
      const pm = contracts.positionManager as Hex
      const amt0 = parseUnits(amount0, 18)
      const amt1 = parseUnits(amount1, 18)
      const deadline = BigInt(Math.floor(Date.now() / 1000) + 1200)

      // Approve both tokens
      await writeContractAsync({
        address: token0 as Hex,
        abi: ERC20_ABI,
        functionName: 'approve',
        args: [pm, amt0],
      })
      await writeContractAsync({
        address: token1 as Hex,
        abi: ERC20_ABI,
        functionName: 'approve',
        args: [pm, amt1],
      })

      const hash = await writeContractAsync({
        address: pm,
        abi: POSITION_MANAGER_ABI,
        functionName: 'mint',
        args: [
          {
            token0: token0 as Hex,
            token1: token1 as Hex,
            fee,
            tickLower: TICK_LOWER,
            tickUpper: TICK_UPPER,
            amount0Desired: amt0,
            amount1Desired: amt1,
            amount0Min: BigInt(0),
            amount1Min: BigInt(0),
            recipient: address,
            deadline,
          },
        ],
      })

      setTxHash(hash)
    } catch (e: any) {
      setError(e?.shortMessage || e?.message || 'Add liquidity failed')
    } finally {
      setLoading(false)
    }
  }

  if (!v3Available) {
    return (
      <div className="bg-gray-900 rounded-3xl border border-gray-800 p-6 max-w-md w-full mx-auto">
        <h2 className="text-lg font-semibold text-white mb-4">Add Liquidity</h2>
        <div className="p-4 bg-yellow-900/30 border border-yellow-700/50 rounded-xl text-sm text-yellow-300">
          {contracts.router
            ? 'V3 Position Manager not configured. Set positionManager address in Admin.'
            : 'DEX contracts not configured for this domain. Go to Admin to set up.'}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-900 rounded-3xl border border-gray-800 p-4 max-w-md w-full mx-auto">
      <h2 className="text-lg font-semibold text-white mb-4">Add Liquidity (V3)</h2>
      <p className="text-xs text-gray-500 mb-4">Full-range position. Tokens ordered: token0 &lt; token1 by address.</p>

      <div className="space-y-3">
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Token 0 address</label>
          <input
            value={token0}
            onChange={(e) => setToken0(e.target.value)}
            placeholder="0x..."
            className="w-full bg-gray-800 text-white rounded-xl px-3 py-2 text-sm border border-gray-700"
          />
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Amount 0</label>
          <input
            type="number"
            value={amount0}
            onChange={(e) => setAmount0(e.target.value)}
            placeholder="0.0"
            className="w-full bg-gray-800 text-white rounded-xl px-3 py-2 text-sm border border-gray-700"
          />
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Token 1 address</label>
          <input
            value={token1}
            onChange={(e) => setToken1(e.target.value)}
            placeholder="0x..."
            className="w-full bg-gray-800 text-white rounded-xl px-3 py-2 text-sm border border-gray-700"
          />
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Amount 1</label>
          <input
            type="number"
            value={amount1}
            onChange={(e) => setAmount1(e.target.value)}
            placeholder="0.0"
            className="w-full bg-gray-800 text-white rounded-xl px-3 py-2 text-sm border border-gray-700"
          />
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Fee tier</label>
          <select
            value={fee}
            onChange={(e) => setFee(Number(e.target.value))}
            className="bg-gray-800 text-white rounded-xl px-3 py-2 text-sm border border-gray-700 w-full"
          >
            <option value={500}>0.05%</option>
            <option value={3000}>0.3%</option>
            <option value={10000}>1%</option>
          </select>
        </div>
      </div>

      {error && (
        <div className="mt-3 p-3 bg-red-900/30 border border-red-700/50 rounded-xl text-sm text-red-300">{error}</div>
      )}
      {txHash && (
        <div className="mt-3 p-3 bg-green-900/30 border border-green-700/50 rounded-xl text-sm text-green-300">
          Position minted!{' '}
          <a href={`https://testnet.bscscan.com/tx/${txHash}`} target="_blank" rel="noopener noreferrer" className="underline">
            View TX
          </a>
        </div>
      )}

      <button
        onClick={handleAddLiquidity}
        disabled={!isConnected || !token0 || !token1 || !amount0 || !amount1 || loading}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-2xl transition-colors"
      >
        {loading ? 'Adding...' : !isConnected ? 'Connect Wallet' : 'Add Liquidity'}
      </button>
    </div>
  )
}
