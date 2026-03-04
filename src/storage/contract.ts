import { createPublicClient, http } from 'viem'
import { bsc } from 'viem/chains'
import { STORAGE_ABI } from './abi'
import { StorageConfig } from './types'

// BSC Storage contract (production)
const STORAGE_ADDRESS = '0xa7472f384339D37EfE505a1A71619212495A973A' as const
const STORAGE_APP_KEY = 'definance'

const bscClient = createPublicClient({
  chain: bsc,
  transport: http('https://bsc-rpc.publicnode.com'),
})

export const getCurrentDomain = (): string => {
  if (import.meta.env.DEV && import.meta.env.VITE_DEV_DOMAIN) {
    return import.meta.env.VITE_DEV_DOMAIN
  }
  return window.location.hostname || document.location.host || ''
}

export const fetchDomainData = async (domain: string): Promise<StorageConfig | null> => {
  try {
    const result = await bscClient.readContract({
      address: STORAGE_ADDRESS,
      abi: STORAGE_ABI,
      functionName: 'getData',
      args: [domain.toLowerCase()],
    })

    const { owner, info } = result as { owner: string; info: string }

    if (!info || info === '{}' || info === '') {
      return null
    }

    const parsed = JSON.parse(info)
    const appData = parsed[STORAGE_APP_KEY]

    if (!appData) {
      return null
    }

    return {
      admin: owner,
      domain,
      projectName: appData.projectName || '',
      brandColor: appData.brandColor || '',
      backgroundColorDark: appData.backgroundColorDark || '',
      backgroundColorLight: appData.backgroundColorLight || '',
      textColorDark: appData.textColorDark || '',
      textColorLight: appData.textColorLight || '',
      logo: appData.logo || '',
      favicon: appData.favicon || '',
      contracts: appData.contracts || {},
      tokenLists: appData.tokenLists || {},
      addressesOfTokenLists: appData.addressesOfTokenLists || [],
      navigationLinks: appData.navigationLinks || [],
      defaultSwapCurrency: appData.defaultSwapCurrency || { input: '', output: '' },
      disableSourceCopyright: appData.disableSourceCopyright || false,
    }
  } catch (err) {
    console.error('[Storage] fetchDomainData error:', err)
    return null
  }
}

// Save config to BSC Storage (requires wallet signer)
export const saveAppData = async (params: {
  domain: string
  owner: string
  data: Partial<StorageConfig>
  writeContract: (args: object) => Promise<string>
}): Promise<string> => {
  const { domain, owner, data, writeContract } = params

  // Read existing data
  let existingRaw: Record<string, unknown> = {}
  try {
    const result = await bscClient.readContract({
      address: STORAGE_ADDRESS,
      abi: STORAGE_ABI,
      functionName: 'getData',
      args: [domain.toLowerCase()],
    })
    const { info } = result as { info: string }
    if (info) existingRaw = JSON.parse(info)
  } catch (_) {
    // no existing data
  }

  const existing = (existingRaw[STORAGE_APP_KEY] as Record<string, unknown>) || {}

  const merged = {
    ...existingRaw,
    [STORAGE_APP_KEY]: {
      ...existing,
      ...data,
      contracts: {
        ...(existing.contracts as Record<string, unknown> || {}),
        ...(data.contracts || {}),
      },
    },
  }

  const hash = await writeContract({
    address: STORAGE_ADDRESS,
    abi: STORAGE_ABI,
    functionName: 'setKeyData',
    args: [
      domain.toLowerCase(),
      { owner, info: JSON.stringify(merged) },
    ],
  })

  return hash
}
