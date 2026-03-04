# UniFactory DEX v3 — SKILL.md (Agent Guide)

## Overview

UniFactory is a white-label DEX built on Uniswap V3 SDK, React 18, Vite, wagmi v2, and Reown AppKit.
Configuration is stored in a BSC Storage smart contract, keyed by domain name.

**Live demo:** https://appsource.github.io/dex
**Repo:** https://github.com/appsource/dex
**Storage contract (BSC):** `0xa7472f384339D37EfE505a1A71619212495A973A`
**Storage key:** `definance` (hardcoded app namespace)

---

## Architecture

```
src/
├── appkit.ts              # AppKit + wagmi config
├── storage/
│   ├── abi.ts             # Storage contract ABI (viem-compatible)
│   ├── contract.ts        # fetchDomainData(), saveAppData()
│   └── types.ts           # StorageConfig, ChainContracts, isV3Mode()
├── hooks/
│   ├── useStorageConfig.ts # Auto-loads Storage on startup
│   └── useSwap.ts          # getQuote() + executeSwap() via QuoterV2/SwapRouter02
├── components/
│   ├── Header/             # Nav + Connect Wallet (AppKit button)
│   ├── Swap/               # SwapWidget + TokenInput
│   ├── Pool/               # PoolWidget (add liquidity V3)
│   └── Admin/              # AdminPanel (save contracts/branding to Storage)
└── pages/                  # SwapPage, PoolPage, AdminPage
```

---

## V2 vs V3 Mode

The DEX auto-detects mode based on Storage data:

| Field | V2 mode | V3 mode |
|-------|---------|---------|
| `factory` | UniswapV2Factory | UniswapV3Factory |
| `router` | UniswapV2Router02 | SwapRouter02 |
| `quoter` | (absent) | **QuoterV2** ← triggers V3 mode |
| `positionManager` | (absent) | NonfungiblePositionManager |

---

## Storage Data Format

```json
{
  "definance": {
    "contracts": {
      "97": {
        "factory":         "0x...",
        "router":          "0x...",
        "quoter":          "0x...",
        "positionManager": "0x..."
      },
      "56": {
        "factory":         "0x...",
        "router":          "0x...",
        "quoter":          "0x...",
        "positionManager": "0x..."
      }
    },
    "projectName":    "My DEX",
    "brandColor":     "#FF6B00",
    "logo":           "https://...",
    "tokenLists": {
      "97": {
        "mylist": {
          "name": "My Token List",
          "tokens": [
            { "address": "0x...", "symbol": "TKN", "decimals": 18, "chainId": 97, "name": "Token" }
          ]
        }
      }
    },
    "defaultSwapCurrency": {
      "input":  "0x...",
      "output": "0x..."
    }
  }
}
```

---

## Deploy New DEX for Client

### Step 1: Deploy V3 Contracts

Use `@uniswap/deploy-v3` or existing deployments. For BNB Testnet, standard deployments exist.

```bash
# Example: check if V3 factory exists on testnet
cast call --rpc-url https://bsc-testnet-rpc.publicnode.com \
  0xYOUR_FACTORY "owner()(address)"
```

### Step 2: Register Domain in Storage

The client can use the Admin page at their domain, or use a script:

```javascript
// scripts/register-domain.js
const { createWalletClient, http } = require('viem')
const { bsc } = require('viem/chains')
const { privateKeyToAccount } = require('viem/accounts')

const STORAGE = '0xa7472f384339D37EfE505a1A71619212495A973A'
const STORAGE_ABI = [/* see src/storage/abi.ts */]

const client = createWalletClient({
  account: privateKeyToAccount(process.env.PRIVATE_KEY),
  chain: bsc,
  transport: http('https://bsc-rpc.publicnode.com'),
})

const data = {
  definance: {
    contracts: {
      "56": {
        factory:         "0xFACTORY_ADDRESS",
        router:          "0xROUTER_ADDRESS",
        quoter:          "0xQUOTER_ADDRESS",
        positionManager: "0xPOSITION_MANAGER_ADDRESS",
      }
    },
    projectName: "ClientDEX",
    brandColor:  "#FF6B00",
  }
}

await client.writeContract({
  address: STORAGE,
  abi: STORAGE_ABI,
  functionName: 'setKeyData',
  args: ['client-domain.com', { owner: client.account.address, info: JSON.stringify(data) }],
})
```

### Step 3: Point DNS to Server

```
client-domain.com  A  95.217.227.164
```

### Step 4: GitHub Pages (static hosting)

The DEX is deployed to GitHub Pages via CI:
- Repo: `appsource/dex` (gh-pages branch)
- URL: `https://appsource.github.io/dex`
- CI: `.github/workflows/deploy.yml` (push to main → auto deploy)

For a custom domain, use a CNAME in the `appsource/dex` repo settings.

---

## Development

```bash
cd /root/unifactory
npm install
npm run dev          # starts at http://localhost:5173

# Test with specific domain config:
echo "VITE_DEV_DOMAIN=appsource.github.io" > .env.local
npm run dev
```

## Build & Deploy

```bash
npm run build_clean  # outputs to build/
# CI: .github/workflows/deploy.yml runs on push to main
```

---

## Token Lists

Token lists are stored per chain in Storage:
```json
"tokenLists": {
  "97": {
    "listId": {
      "name": "List Name",
      "tokens": [...]
    }
  }
}
```

The Admin page currently supports contract addresses and branding.
Token list management can be added to Admin via `saveAppData` with `tokenLists` key.

---

## BNB Testnet (Chain 97) — Test Setup

- Storage: `0x91a0DCC7a78Da02244212D36eAFd9E0dBB3174B4`
- Test BNB: https://testnet.bnbchain.org/faucet-smart
- Also available from PolyFactory test account

**Test tokens:**
- WEENUS: `0x703f112Bda4Cc6cb9c5FB4B2e6140f6D8374F10b` (18 dec)
- USDT:   `0x348236484ce96A293E210260b90bBFb228D6d1Fc` (6 dec)

To test swap, you need:
1. V3 contracts deployed on testnet
2. Pool created with initial liquidity
3. Admin page → set Quoter + Router addresses for chain 97
