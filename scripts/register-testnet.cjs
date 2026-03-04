#!/usr/bin/env node
/**
 * Register dex.onout.org with PancakeSwap V3 contracts on BSC Testnet
 *
 * Usage:
 *   PRIVATE_KEY=0x... node scripts/register-testnet.cjs
 *
 * Or with domain override:
 *   PRIVATE_KEY=0x... DOMAIN=mydex.example.com node scripts/register-testnet.cjs
 *
 * BNB Testnet faucet: https://testnet.bnbchain.org/faucet-smart
 */

const { createPublicClient, createWalletClient, http } = require('viem')
const { privateKeyToAccount } = require('/root/unifactory/node_modules/viem/_cjs/accounts/index.js')

const PRIVATE_KEY = process.env.PRIVATE_KEY
if (!PRIVATE_KEY) {
  console.error('ERROR: PRIVATE_KEY env var required')
  process.exit(1)
}

const DOMAIN = process.env.DOMAIN || 'appsource.github.io'

const bscTestnet = {
  id: 97,
  name: 'BSC Testnet',
  nativeCurrency: { decimals: 18, name: 'BNB', symbol: 'tBNB' },
  rpcUrls: { default: { http: ['https://bsc-testnet-rpc.publicnode.com'] } },
  blockExplorers: { default: { name: 'BSCScan', url: 'https://testnet.bscscan.com' } },
}

// PancakeSwap V3 on BSC Testnet (chain 97)
const PCS_V3 = {
  factory:  '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
  router:   '0x9a489505a00cE272eAa5e07Dba6491314CaE3796',
  quoter:   '0xbC203d7f83677c7ed3F7acEc959963E7F4ECC5C2',
  // positionManager: not deployed on BSC testnet
}

// Tokens with existing WBNB/BUSD pool (fee 500) on BSC testnet
// Pool: 0xa0172eaa8aC038FaDC47129F8dFE9d20c3073Ea9
const WBNB = '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
const BUSD = '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee'

const TOKEN_LIST_97 = {
  default: {
    name: 'BSC Testnet Default',
    tokens: [
      { address: WBNB, symbol: 'WBNB', name: 'Wrapped BNB', decimals: 18, chainId: 97 },
      { address: BUSD, symbol: 'BUSD', name: 'Binance USD', decimals: 18, chainId: 97 },
    ],
  },
}

const STORAGE_ADDRESS = '0x91a0DCC7a78Da02244212D36eAFd9E0dBB3174B4' // BSC Testnet Storage
const STORAGE_APP_KEY = 'definance'

const STORAGE_ABI = [
  {
    inputs: [{ type: 'string', name: '_key' }],
    name: 'getData',
    outputs: [{ components: [{ name: 'owner', type: 'address' }, { name: 'info', type: 'string' }], type: 'tuple' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { type: 'string', name: '_key' },
      { components: [{ name: 'owner', type: 'address' }, { name: 'info', type: 'string' }], type: 'tuple', name: '_data' },
    ],
    name: 'setKeyData',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

;(async () => {
  const account = privateKeyToAccount(PRIVATE_KEY)
  console.log(`\nAccount: ${account.address}`)
  console.log(`Domain:  ${DOMAIN}`)
  console.log(`Network: BSC Testnet (97)`)
  console.log(`Storage: ${STORAGE_ADDRESS}\n`)

  const publicClient = createPublicClient({ chain: bscTestnet, transport: http('https://bsc-testnet-rpc.publicnode.com') })
  const walletClient = createWalletClient({ account, chain: bscTestnet, transport: http('https://bsc-testnet-rpc.publicnode.com') })

  // Check balance
  const balance = await publicClient.getBalance({ address: account.address })
  console.log(`Balance: ${Number(balance) / 1e18} tBNB`)
  if (balance === 0n) {
    console.error('ERROR: No tBNB. Get some from: https://testnet.bnbchain.org/faucet-smart')
    process.exit(1)
  }

  // Read existing data
  const existing = await publicClient.readContract({
    address: STORAGE_ADDRESS,
    abi: STORAGE_ABI,
    functionName: 'getData',
    args: [DOMAIN],
  })

  let existingData = {}
  if (existing.info) {
    try { existingData = JSON.parse(existing.info) } catch (_) {}
  }

  const existingApp = existingData[STORAGE_APP_KEY] || {}

  const newData = {
    ...existingData,
    [STORAGE_APP_KEY]: {
      ...existingApp,
      contracts: {
        ...(existingApp.contracts || {}),
        '97': PCS_V3,
      },
      tokenLists: {
        ...(existingApp.tokenLists || {}),
        '97': TOKEN_LIST_97,
      },
      defaultSwapCurrency: {
        input: WBNB,
        output: BUSD,
      },
      projectName: existingApp.projectName || 'UniFactory DEX',
    },
  }

  console.log('Writing to Storage:')
  console.log(JSON.stringify({ contracts: newData[STORAGE_APP_KEY].contracts }, null, 2))

  const hash = await walletClient.writeContract({
    address: STORAGE_ADDRESS,
    abi: STORAGE_ABI,
    functionName: 'setKeyData',
    args: [DOMAIN, { owner: account.address, info: JSON.stringify(newData) }],
  })

  console.log(`\nTX hash: ${hash}`)
  console.log(`Explorer: https://testnet.bscscan.com/tx/${hash}`)

  const receipt = await publicClient.waitForTransactionReceipt({ hash })
  console.log(`Status: ${receipt.status === 'success' ? '✓ SUCCESS' : '✗ FAILED'}`)

  if (receipt.status === 'success') {
    console.log(`\n✓ Domain '${DOMAIN}' registered on BSC Testnet Storage!`)
    console.log(`  Now open appsource.github.io/dex, switch wallet to BSC Testnet (97),`)
    console.log(`  and the DEX will load PancakeSwap V3 contracts.`)
  }
})().catch(e => { console.error(e.message); process.exit(1) })
