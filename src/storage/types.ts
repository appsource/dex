export interface ChainContracts {
  factory?: string
  router?: string
  quoter?: string          // QuoterV2 — признак V3 режима
  positionManager?: string // NonfungiblePositionManager
  pairHash?: string        // для V2 режима
  feeRecipient?: string
}

export interface TokenInfo {
  address: string
  chainId: number
  decimals: number
  symbol: string
  name: string
  logoURI?: string
}

export interface TokenList {
  name: string
  tokens: TokenInfo[]
}

export interface StorageConfig {
  admin: string
  domain: string
  projectName: string
  brandColor: string
  backgroundColorDark: string
  backgroundColorLight: string
  textColorDark: string
  textColorLight: string
  logo: string
  favicon: string
  contracts: Record<string, ChainContracts> // key: chainId as string
  tokenLists: Record<string, Record<string, TokenList>> // [chainId][listId]
  addressesOfTokenLists: string[]
  navigationLinks: { name: string; link: string }[]
  defaultSwapCurrency: { input: string; output: string }
  disableSourceCopyright: boolean
  // V3 mode if any contracts[chainId].quoter exists
}

export const isV3Mode = (contracts: ChainContracts): boolean => {
  return !!contracts?.quoter
}
