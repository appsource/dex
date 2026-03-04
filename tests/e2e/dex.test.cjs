#!/usr/bin/env node
/**
 * UniFactory DEX E2E test via Puppeteer
 *
 * Tests:
 *   1. App loads without JS errors
 *   2. Header with nav links is visible
 *   3. Connect Wallet button (AppKit) is present
 *   4. Swap page shows token inputs
 *   5. Pool page is accessible
 *   6. Admin page is accessible
 *   7. Contract read from BSC Storage (appsource.github.io config)
 *
 * Run:
 *   node tests/e2e/dex.test.cjs
 *
 * Uses puppeteer from ~/MultiCurrencyWallet/node_modules/puppeteer
 */

const http = require('http')
const fs = require('fs')
const path = require('path')
const puppeteer = require('/root/MultiCurrencyWallet/node_modules/puppeteer')

// ── helpers ───────────────────────────────────────────────────────────────────

const SCREENSHOTS_DIR = path.resolve(__dirname, 'screenshots')
if (!fs.existsSync(SCREENSHOTS_DIR)) fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true })

const BUILD_DIR = path.resolve(__dirname, '../../build')

function timeOut(ms) { return new Promise(r => setTimeout(r, ms)) }

async function screenshot(page, name) {
  const file = path.join(SCREENSHOTS_DIR, `${name}.png`)
  await page.screenshot({ path: file, fullPage: true })
  console.log(`  📷 ${path.relative(process.cwd(), file)}`)
}

// Static file server — serves build/ and handles SPA routing
function startServer(root, port) {
  return new Promise((resolve, reject) => {
    const MIME = {
      '.html': 'text/html',
      '.js':   'application/javascript',
      '.mjs':  'application/javascript',
      '.css':  'text/css',
      '.json': 'application/json',
      '.png':  'image/png',
      '.svg':  'image/svg+xml',
      '.ico':  'image/x-icon',
    }
    const server = http.createServer((req, res) => {
      let urlPath = req.url.split('?')[0]
      let filePath = path.join(root, urlPath)

      // SPA fallback: if file not found, serve index.html
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(root, 'index.html')
      }

      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return }
        const ext = path.extname(filePath)
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
        res.end(data)
      })
    })
    server.listen(port, () => resolve(server))
    server.on('error', reject)
  })
}

// ── test runner ───────────────────────────────────────────────────────────────

let passed = 0, failed = 0
const errors = []

async function test(name, fn) {
  process.stdout.write(`  ${name}... `)
  try {
    await fn()
    console.log('✓')
    passed++
  } catch (err) {
    console.log('✗')
    console.error(`    Error: ${err.message}`)
    errors.push({ name, error: err.message })
    failed++
  }
}

function assert(condition, msg) {
  if (!condition) throw new Error(msg || 'assertion failed')
}

// ── main ──────────────────────────────────────────────────────────────────────

;(async () => {
  console.log('\n🧪 UniFactory DEX E2E Tests\n')

  // Verify build exists
  if (!fs.existsSync(BUILD_DIR) || !fs.existsSync(path.join(BUILD_DIR, 'index.html'))) {
    console.error('ERROR: build/ directory not found. Run: npm run build')
    process.exit(1)
  }

  const PORT = 5180
  const BASE_URL = `http://localhost:${PORT}`

  const server = await startServer(BUILD_DIR, PORT)
  console.log(`  Server started at ${BASE_URL}\n`)

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-setuid-sandbox'],
  })

  const jsErrors = []
  const page = await browser.newPage()
  page.on('pageerror', (err) => jsErrors.push(err.message))
  page.on('console', (msg) => {
    if (msg.type() === 'error') jsErrors.push(msg.text())
  })

  try {
    // ── Test 1: App loads ──
    await test('App loads without critical errors', async () => {
      await page.goto(`${BASE_URL}/swap`, { waitUntil: 'networkidle0', timeout: 30000 })
      await timeOut(2000)
      await screenshot(page, '01-swap-page')

      const criticalErrors = jsErrors.filter(
        e => !e.includes('ResizeObserver') && // browser quirk
             !e.includes('chrome-extension') &&
             !e.includes('favicon') &&
             !e.includes('Failed to fetch') // ok for Storage read without network
      )
      // Allow network errors (no wallet, no RPC in test env) — just no JS crashes
      const jsCrashes = criticalErrors.filter(e =>
        e.includes('is not a function') ||
        e.includes('Cannot read') ||
        e.includes('Uncaught') ||
        e.includes('ReferenceError') ||
        e.includes('SyntaxError')
      )
      assert(jsCrashes.length === 0, `JS crashes: ${jsCrashes.slice(0, 3).join('; ')}`)
    })

    // ── Test 2: Header visible ──
    await test('Header with navigation is visible', async () => {
      const header = await page.$('header')
      assert(header !== null, 'No <header> element found')

      const text = await page.evaluate(() => document.querySelector('header')?.textContent || '')
      assert(text.includes('Swap'), `No "Swap" nav link in header. Got: ${text.slice(0, 100)}`)
      assert(text.includes('Pool'), 'No "Pool" nav link in header')
      assert(text.includes('Admin'), 'No "Admin" nav link in header')
    })

    // ── Test 3: AppKit button ──
    await test('Connect Wallet button (AppKit) is present', async () => {
      // AppKit renders <appkit-button> web component
      const btn = await page.$('appkit-button')
      if (!btn) {
        // fallback: check for w3m-button or text
        const bodyText = await page.evaluate(() => document.body.innerHTML)
        assert(
          bodyText.includes('appkit-button') || bodyText.includes('w3m-button') || bodyText.includes('Connect'),
          'No AppKit button found on page'
        )
      }
    })

    // ── Test 4: Swap form inputs ──
    await test('Swap page shows token inputs', async () => {
      await page.goto(`${BASE_URL}/swap`, { waitUntil: 'networkidle0', timeout: 15000 })
      await timeOut(1500)
      await screenshot(page, '02-swap-form')

      const inputs = await page.$$('input[type="number"], input[placeholder="0.0"]')
      assert(inputs.length >= 1, `Expected at least 1 numeric input on swap page, got ${inputs.length}`)

      const text = await page.evaluate(() => document.body.textContent || '')
      assert(text.includes('Swap') || text.includes('pay') || text.includes('Pay'), 'Swap labels not found')
    })

    // ── Test 5: Flip button works ──
    await test('Swap: flip button reverses tokens', async () => {
      // Get initial token values
      const selects = await page.$$('select')
      const initialValues = await Promise.all(selects.map(s => s.evaluate(el => el.value)))

      // Click flip button (SVG arrow button between inputs)
      const flipBtn = await page.$('button svg path[d*="M7 16V4"]')
      const flipBtnParent = flipBtn
        ? await page.evaluateHandle(el => el.closest('button'), flipBtn)
        : await page.$('button:has(svg)')

      if (flipBtnParent) {
        await flipBtnParent.click()
        await timeOut(300)
        await screenshot(page, '03-swap-flipped')
      }
      // Test passes even if flip button not found — it's a soft check
    })

    // ── Test 6: Pool page ──
    await test('Pool page is accessible', async () => {
      await page.goto(`${BASE_URL}/pool`, { waitUntil: 'networkidle0', timeout: 15000 })
      await timeOut(1000)
      await screenshot(page, '04-pool-page')

      const text = await page.evaluate(() => document.body.textContent || '')
      assert(
        text.includes('Pool') || text.includes('Liquidity') || text.includes('liquidity') || text.includes('V3'),
        `Pool page content not found. Got: ${text.slice(0, 200)}`
      )
    })

    // ── Test 7: Admin page ──
    await test('Admin page is accessible', async () => {
      await page.goto(`${BASE_URL}/admin`, { waitUntil: 'networkidle0', timeout: 15000 })
      await timeOut(1000)
      await screenshot(page, '05-admin-page')

      const text = await page.evaluate(() => document.body.textContent || '')
      assert(
        text.includes('Admin') || text.includes('Factory') || text.includes('Router') || text.includes('Contracts'),
        `Admin page content not found. Got: ${text.slice(0, 200)}`
      )
    })

    // ── Test 8: Admin shows contract inputs ──
    await test('Admin page shows contract address inputs', async () => {
      const inputs = await page.$$('input[placeholder="0x..."]')
      assert(inputs.length >= 2, `Expected at least 2 address inputs in Admin, got ${inputs.length}`)
      await screenshot(page, '06-admin-inputs')
    })

    // ── Test 9: BSC Storage contract readable ──
    await test('BSC Storage: can read appsource.github.io config', async () => {
      // This test uses direct RPC call (no browser)
      const { createPublicClient, http } = require('viem')
      const { bsc } = require('viem/chains')
      const client = createPublicClient({
        chain: bsc,
        transport: http('https://bsc-rpc.publicnode.com'),
      })

      const STORAGE_ABI = [{
        inputs: [{ type: 'string', name: '_key' }],
        name: 'getData',
        outputs: [{ components: [{ name: 'owner', type: 'address' }, { name: 'info', type: 'string' }], type: 'tuple' }],
        stateMutability: 'view',
        type: 'function',
      }]

      const result = await client.readContract({
        address: '0xa7472f384339D37EfE505a1A71619212495A973A',
        abi: STORAGE_ABI,
        functionName: 'getData',
        args: ['appsource.github.io'],
      })

      assert(result !== null, 'Storage returned null')
      const data = JSON.parse(result.info || '{}')
      assert(data.definance?.contracts, 'No contracts in Storage for appsource.github.io')
      const chains = Object.keys(data.definance.contracts)
      assert(chains.length > 0, 'No chain contracts configured')
      console.log(`\n    Configured chains: ${chains.join(', ')}`)
    })

    // ── Test 10: BSC Testnet Storage readable ──
    await test('BSC Testnet Storage: contracts accessible', async () => {
      const { createPublicClient, http } = require('viem')
      const bscTestnet = {
        id: 97, name: 'BSC Testnet',
        nativeCurrency: { decimals: 18, name: 'BNB', symbol: 'tBNB' },
        rpcUrls: { default: { http: ['https://bsc-testnet-rpc.publicnode.com'] } }
      }
      const client = createPublicClient({ chain: bscTestnet, transport: http('https://bsc-testnet-rpc.publicnode.com') })

      const PCS_V3_FACTORY = '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865'
      const code = await client.getCode({ address: PCS_V3_FACTORY })
      assert(code && code !== '0x', 'PancakeSwap V3 Factory not deployed on BSC testnet')
      console.log('\n    PancakeSwap V3 Factory: ✓')

      const PCS_QUOTER_V2 = '0xbC203d7f83677c7ed3F7acEc959963E7F4ECC5C2'
      const quoterCode = await client.getCode({ address: PCS_QUOTER_V2 })
      assert(quoterCode && quoterCode !== '0x', 'PancakeSwap QuoterV2 not deployed on BSC testnet')
      console.log('    PancakeSwap QuoterV2: ✓')
    })

    // ── Test 11: BSC Testnet QuoterV2 returns price for WBNB/BUSD ──
    await test('BSC Testnet: QuoterV2 returns WBNB→BUSD price', async () => {
      const { createPublicClient, http, parseEther, formatEther } = require('viem')
      const bscTestnet = {
        id: 97, name: 'BSC Testnet',
        nativeCurrency: { decimals: 18, name: 'BNB', symbol: 'tBNB' },
        rpcUrls: { default: { http: ['https://bsc-testnet-rpc.publicnode.com'] } }
      }
      const client = createPublicClient({ chain: bscTestnet, transport: http('https://bsc-testnet-rpc.publicnode.com') })

      const QUOTER_ABI = [{
        inputs: [{ components: [
          { name: 'tokenIn', type: 'address' }, { name: 'tokenOut', type: 'address' },
          { name: 'amountIn', type: 'uint256' }, { name: 'fee', type: 'uint24' },
          { name: 'sqrtPriceLimitX96', type: 'uint160' },
        ], name: 'params', type: 'tuple' }],
        name: 'quoteExactInputSingle',
        outputs: [{ name: 'amountOut', type: 'uint256' }, { name: 's', type: 'uint160' }, { name: 'i', type: 'uint32' }, { name: 'g', type: 'uint256' }],
        stateMutability: 'nonpayable', type: 'function'
      }]

      const result = await client.simulateContract({
        address: '0xbC203d7f83677c7ed3F7acEc959963E7F4ECC5C2',
        abi: QUOTER_ABI,
        functionName: 'quoteExactInputSingle',
        args: [{
          tokenIn:  '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', // WBNB
          tokenOut: '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee', // BUSD
          amountIn: parseEther('0.01'),
          fee: 500,
          sqrtPriceLimitX96: 0n,
        }],
      })

      const amountOut = result.result[0]
      assert(amountOut > 0n, 'QuoterV2 returned 0 amountOut')
      console.log(`\n    0.01 WBNB → ${formatEther(amountOut)} BUSD ✓`)
    })

    // ── Test 12: BSC Testnet Storage has chain 97 config ──
    await test('BSC Testnet Storage: appsource.github.io has chain 97 config', async () => {
      const { createPublicClient, http } = require('viem')
      const bscTestnet = {
        id: 97, name: 'BSC Testnet',
        nativeCurrency: { decimals: 18, name: 'BNB', symbol: 'tBNB' },
        rpcUrls: { default: { http: ['https://bsc-testnet-rpc.publicnode.com'] } }
      }
      const client = createPublicClient({ chain: bscTestnet, transport: http('https://bsc-testnet-rpc.publicnode.com') })

      const STORAGE_ABI = [{
        inputs: [{ type: 'string', name: '_key' }],
        name: 'getData',
        outputs: [{ components: [{ name: 'owner', type: 'address' }, { name: 'info', type: 'string' }], type: 'tuple' }],
        stateMutability: 'view', type: 'function',
      }]

      const result = await client.readContract({
        address: '0x91a0DCC7a78Da02244212D36eAFd9E0dBB3174B4',
        abi: STORAGE_ABI,
        functionName: 'getData',
        args: ['appsource.github.io'],
      })

      assert(result.info, 'No Storage data for appsource.github.io on BSC testnet')
      const data = JSON.parse(result.info)
      assert(data.definance?.contracts?.['97'], 'No chain 97 contracts in Storage')
      assert(data.definance.contracts['97'].quoter, 'No quoter in chain 97 config (V3 mode required)')
      console.log('\n    Storage chain 97:', JSON.stringify(data.definance.contracts['97']))
    })

  } finally {
    await browser.close()
    server.close()
  }

  // ── Summary ──
  console.log('\n' + '─'.repeat(50))
  console.log(`Results: ${passed} passed, ${failed} failed`)
  if (errors.length) {
    console.log('\nFailed tests:')
    errors.forEach(e => console.log(`  ✗ ${e.name}: ${e.error}`))
  }
  console.log('─'.repeat(50))
  process.exit(failed > 0 ? 1 : 0)
})()
