import { useState, useEffect, useCallback } from 'react'
import { useAccount } from 'wagmi'
import { formatUnits } from 'viem'
import { useSwap, FEE_TIERS } from '../../hooks/useSwap'
import { useStorageConfig } from '../../hooks/useStorageConfig'
import { isV3Mode } from '../../storage/types'
import TokenInput from './TokenInput'

// Default BNB Testnet tokens for demo
const DEFAULT_TOKENS = [
  {
    address: '0x703f112Bda4Cc6cb9c5FB4B2e6140f6D8374F10b',
    symbol: 'WEENUS',
    decimals: 18,
  },
  {
    address: '0x348236484ce96A293E210260b90bBFb228D6d1Fc',
    symbol: 'USDT',
    decimals: 6,
  },
]

export default function SwapWidget() {
  const { isConnected } = useAccount()
  const { config } = useStorageConfig()
  const { getQuote, executeSwap, contracts, chainId } = useSwap()

  const [tokenIn, setTokenIn] = useState(DEFAULT_TOKENS[0].address)
  const [tokenOut, setTokenOut] = useState(DEFAULT_TOKENS[1].address)
  const [amountIn, setAmountIn] = useState('')
  const [amountOut, setAmountOut] = useState('')
  const [feeTier, setFeeTier] = useState<500 | 3000 | 10000>(3000)
  const [quoteLoading, setQuoteLoading] = useState(false)
  const [swapLoading, setSwapLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [txHash, setTxHash] = useState<string | null>(null)

  // Build token list from Storage config
  const tokenList = (() => {
    const lists = config?.tokenLists?.[String(chainId)]
    if (!lists) return DEFAULT_TOKENS
    const tokens: typeof DEFAULT_TOKENS = []
    Object.values(lists).forEach((list: any) => {
      if (list?.tokens) {
        list.tokens.forEach((t: any) => {
          if (!tokens.find((x) => x.address.toLowerCase() === t.address?.toLowerCase())) {
            tokens.push({ address: t.address, symbol: t.symbol, decimals: t.decimals })
          }
        })
      }
    })
    return tokens.length > 0 ? tokens : DEFAULT_TOKENS
  })()

  const getTokenDecimals = (addr: string) => {
    return tokenList.find((t) => t.address.toLowerCase() === addr.toLowerCase())?.decimals ?? 18
  }

  const v3Available = isV3Mode(contracts)

  // Debounced quote fetch
  const fetchQuote = useCallback(async () => {
    if (!amountIn || !tokenIn || !tokenOut || tokenIn === tokenOut) {
      setAmountOut('')
      return
    }
    if (!v3Available) {
      setAmountOut('')
      return
    }

    setQuoteLoading(true)
    setError(null)
    try {
      const result = await getQuote({
        tokenIn,
        tokenInDecimals: getTokenDecimals(tokenIn),
        tokenOut,
        amountIn,
        fee: feeTier,
      })
      if (result) {
        const outDecimals = getTokenDecimals(tokenOut)
        setAmountOut(formatUnits(result, outDecimals))
      } else {
        setAmountOut('')
        setError('No liquidity for this pair/fee tier')
      }
    } catch (e: any) {
      setError(e?.message || 'Quote failed')
      setAmountOut('')
    } finally {
      setQuoteLoading(false)
    }
  }, [amountIn, tokenIn, tokenOut, feeTier, v3Available, getQuote])

  useEffect(() => {
    const timer = setTimeout(fetchQuote, 500)
    return () => clearTimeout(timer)
  }, [fetchQuote])

  const handleSwap = async () => {
    if (!isConnected) {
      setError('Connect wallet first')
      return
    }
    if (!amountIn || !amountOut) return

    setSwapLoading(true)
    setError(null)
    setTxHash(null)
    try {
      const outDecimals = getTokenDecimals(tokenOut)
      const amountOutMin = BigInt(Math.floor(parseFloat(amountOut) * 0.995 * 10 ** outDecimals))
      const hash = await executeSwap({
        tokenIn,
        tokenInDecimals: getTokenDecimals(tokenIn),
        tokenOut,
        tokenOutDecimals: outDecimals,
        amountIn,
        amountOutMinimum: amountOutMin,
        fee: feeTier,
      })
      setTxHash(hash)
      setAmountIn('')
      setAmountOut('')
    } catch (e: any) {
      setError(e?.shortMessage || e?.message || 'Swap failed')
    } finally {
      setSwapLoading(false)
    }
  }

  const handleFlip = () => {
    setTokenIn(tokenOut)
    setTokenOut(tokenIn)
    setAmountIn('')
    setAmountOut('')
  }

  const notConfigured = !contracts.router

  return (
    <div className="bg-gray-900 rounded-3xl border border-gray-800 p-4 max-w-md w-full mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">Swap</h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Fee tier:</span>
          <select
            value={feeTier}
            onChange={(e) => setFeeTier(Number(e.target.value) as any)}
            className="bg-gray-800 text-gray-300 text-xs rounded-lg px-2 py-1 border border-gray-700"
          >
            <option value={500}>0.05%</option>
            <option value={3000}>0.3%</option>
            <option value={10000}>1%</option>
          </select>
        </div>
      </div>

      {notConfigured && (
        <div className="mb-4 p-3 bg-yellow-900/30 border border-yellow-700/50 rounded-xl text-xs text-yellow-300">
          DEX not configured for this domain. Go to{' '}
          <a href="/admin" className="underline">Admin</a> to set up contracts.
        </div>
      )}

      <div className="space-y-2">
        <TokenInput
          label="You pay"
          value={amountIn}
          onChange={setAmountIn}
          tokenAddress={tokenIn}
          onTokenChange={setTokenIn}
          tokenList={tokenList}
        />

        <div className="flex justify-center">
          <button
            onClick={handleFlip}
            className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-2 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
        </div>

        <TokenInput
          label="You receive"
          value={amountOut}
          onChange={() => {}}
          tokenAddress={tokenOut}
          onTokenChange={setTokenOut}
          tokenList={tokenList}
          readOnly
          loading={quoteLoading}
        />
      </div>

      {error && (
        <div className="mt-3 p-3 bg-red-900/30 border border-red-700/50 rounded-xl text-sm text-red-300">
          {error}
        </div>
      )}

      {txHash && (
        <div className="mt-3 p-3 bg-green-900/30 border border-green-700/50 rounded-xl text-sm text-green-300">
          Swap submitted!{' '}
          <a
            href={`https://testnet.bscscan.com/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            View on BSCScan
          </a>
        </div>
      )}

      <button
        onClick={handleSwap}
        disabled={!isConnected || !amountIn || !amountOut || swapLoading || notConfigured}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-2xl transition-colors text-lg"
      >
        {swapLoading
          ? 'Swapping...'
          : !isConnected
          ? 'Connect Wallet'
          : notConfigured
          ? 'Not Configured'
          : !amountIn
          ? 'Enter amount'
          : quoteLoading
          ? 'Getting price...'
          : 'Swap'}
      </button>

      {!v3Available && contracts.router && (
        <p className="mt-2 text-center text-xs text-gray-500">
          V2 mode — price quotes not available. V3 requires QuoterV2 contract.
        </p>
      )}
    </div>
  )
}
