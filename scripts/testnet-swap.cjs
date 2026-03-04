#!/usr/bin/env node
/**
 * BSC Testnet: wrap BNB → WBNB, then swap WBNB → BUSD via PancakeSwap V3
 *
 * Usage:
 *   PRIVATE_KEY=0x... node scripts/testnet-swap.cjs
 *
 * Contracts (PancakeSwap V3, BSC Testnet 97):
 *   Router:  0x9a489505a00cE272eAa5e07Dba6491314CaE3796
 *   Quoter:  0xbC203d7f83677c7ed3F7acEc959963E7F4ECC5C2
 *   WBNB:    0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd
 *   BUSD:    0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee
 *   Pool:    0xa0172eaa8aC038FaDC47129F8dFE9d20c3073Ea9 (fee 500)
 */

const { createPublicClient, createWalletClient, http, parseEther, formatEther, formatUnits } = require('viem')
const { privateKeyToAccount } = require('/root/unifactory/node_modules/viem/_cjs/accounts/index.js')

const PRIVATE_KEY = process.env.PRIVATE_KEY
if (!PRIVATE_KEY) { console.error('PRIVATE_KEY env required'); process.exit(1) }

const bscTestnet = {
  id: 97, name: 'BSC Testnet',
  nativeCurrency: { decimals: 18, name: 'BNB', symbol: 'tBNB' },
  rpcUrls: { default: { http: ['https://bsc-testnet-rpc.publicnode.com'] } },
  blockExplorers: { default: { name: 'BSCScan', url: 'https://testnet.bscscan.com' } },
}

const WBNB    = '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
const BUSD    = '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee'
const ROUTER  = '0x9a489505a00cE272eAa5e07Dba6491314CaE3796'
const QUOTER  = '0xbC203d7f83677c7ed3F7acEc959963E7F4ECC5C2'
const FEE     = 500

const WBNB_ABI = [
  { name: 'deposit',  type: 'function', inputs: [], outputs: [], stateMutability: 'payable' },
  { name: 'balanceOf', type: 'function', inputs: [{ name: 'a', type: 'address' }], outputs: [{ type: 'uint256' }], stateMutability: 'view' },
  { name: 'approve', type: 'function', inputs: [{ name: 'spender', type: 'address' }, { name: 'amount', type: 'uint256' }], outputs: [{ type: 'bool' }], stateMutability: 'nonpayable' },
]

const BUSD_ABI = [
  { name: 'balanceOf', type: 'function', inputs: [{ name: 'a', type: 'address' }], outputs: [{ type: 'uint256' }], stateMutability: 'view' },
]

const QUOTER_ABI = [{
  inputs: [{ components: [
    { name: 'tokenIn', type: 'address' }, { name: 'tokenOut', type: 'address' },
    { name: 'amountIn', type: 'uint256' }, { name: 'fee', type: 'uint24' },
    { name: 'sqrtPriceLimitX96', type: 'uint160' },
  ], name: 'params', type: 'tuple' }],
  name: 'quoteExactInputSingle',
  outputs: [{ name: 'amountOut', type: 'uint256' }, { name: 'sqrtPriceX96After', type: 'uint160' }, { name: 'i', type: 'uint32' }, { name: 'g', type: 'uint256' }],
  stateMutability: 'nonpayable', type: 'function'
}]

const ROUTER_ABI = [{
  inputs: [{ components: [
    { name: 'tokenIn', type: 'address' }, { name: 'tokenOut', type: 'address' },
    { name: 'fee', type: 'uint24' }, { name: 'recipient', type: 'address' },
    { name: 'amountIn', type: 'uint256' }, { name: 'amountOutMinimum', type: 'uint256' },
    { name: 'sqrtPriceLimitX96', type: 'uint160' },
  ], name: 'params', type: 'tuple' }],
  name: 'exactInputSingle',
  outputs: [{ name: 'amountOut', type: 'uint256' }],
  stateMutability: 'payable', type: 'function'
}]

const AMOUNT_IN = parseEther('0.01') // 0.01 WBNB

;(async () => {
  const account = privateKeyToAccount(PRIVATE_KEY)
  console.log('\n🔧 BSC Testnet Swap Test')
  console.log('Account:', account.address)

  const publicClient = createPublicClient({ chain: bscTestnet, transport: http('https://bsc-testnet-rpc.publicnode.com') })
  const walletClient = createWalletClient({ account, chain: bscTestnet, transport: http('https://bsc-testnet-rpc.publicnode.com') })

  const bnbBalance = await publicClient.getBalance({ address: account.address })
  console.log('tBNB balance:', formatEther(bnbBalance))

  // ── Step 1: Wrap BNB → WBNB ──
  console.log('\n[1/4] Wrapping 0.01 tBNB → WBNB...')
  const wrapHash = await walletClient.writeContract({
    address: WBNB,
    abi: WBNB_ABI,
    functionName: 'deposit',
    value: AMOUNT_IN,
  })
  console.log('  TX:', wrapHash)
  await publicClient.waitForTransactionReceipt({ hash: wrapHash })

  const wbnbBal = await publicClient.readContract({ address: WBNB, abi: WBNB_ABI, functionName: 'balanceOf', args: [account.address] })
  console.log('  WBNB balance now:', formatEther(wbnbBal))

  // ── Step 2: Get quote ──
  console.log('\n[2/4] Getting quote from QuoterV2...')
  const quoteResult = await publicClient.simulateContract({
    address: QUOTER,
    abi: QUOTER_ABI,
    functionName: 'quoteExactInputSingle',
    args: [{ tokenIn: WBNB, tokenOut: BUSD, amountIn: AMOUNT_IN, fee: FEE, sqrtPriceLimitX96: 0n }],
  })
  const expectedOut = quoteResult.result[0]
  const minOut = (expectedOut * 995n) / 1000n // 0.5% slippage
  console.log(`  0.01 WBNB → ${formatEther(expectedOut)} BUSD (min: ${formatEther(minOut)})`)

  // ── Step 3: Approve WBNB → Router ──
  console.log('\n[3/4] Approving WBNB to Router...')
  const approveHash = await walletClient.writeContract({
    address: WBNB,
    abi: WBNB_ABI,
    functionName: 'approve',
    args: [ROUTER, AMOUNT_IN],
  })
  console.log('  TX:', approveHash)
  await publicClient.waitForTransactionReceipt({ hash: approveHash })
  console.log('  ✓ Approved')

  // ── Step 4: Swap ──
  console.log('\n[4/4] Executing swap via SwapRouter02...')
  const deadline = BigInt(Math.floor(Date.now() / 1000) + 1200)
  const swapHash = await walletClient.writeContract({
    address: ROUTER,
    abi: ROUTER_ABI,
    functionName: 'exactInputSingle',
    args: [{
      tokenIn: WBNB,
      tokenOut: BUSD,
      fee: FEE,
      recipient: account.address,
      amountIn: AMOUNT_IN,
      amountOutMinimum: minOut,
      sqrtPriceLimitX96: 0n,
    }],
  })
  console.log('  TX:', swapHash)
  console.log(`  Explorer: https://testnet.bscscan.com/tx/${swapHash}`)

  const receipt = await publicClient.waitForTransactionReceipt({ hash: swapHash })
  console.log(`  Status: ${receipt.status === 'success' ? '✓ SUCCESS' : '✗ FAILED'}`)

  const busdBal = await publicClient.readContract({ address: BUSD, abi: BUSD_ABI, functionName: 'balanceOf', args: [account.address] })
  console.log(`\n✓ Swap complete!`)
  console.log(`  Received: ${formatEther(busdBal)} BUSD`)

})().catch(e => { console.error('\n✗', e.shortMessage || e.message); process.exit(1) })
