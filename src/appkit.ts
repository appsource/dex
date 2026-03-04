import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import {
  mainnet,
  bsc,
  polygon,
  bscTestnet,
  type AppKitNetwork,
} from '@reown/appkit/networks'
import { reconnect } from 'wagmi/actions'
import { http, fallback } from 'wagmi'

const projectId = 'a23677c4af3139b4eccb52981f76ad94'

export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [
  bscTestnet,
  bsc,
  mainnet,
  polygon,
]

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  transports: {
    [bsc.id]: fallback([
      http('https://bsc-rpc.publicnode.com'),
      http('https://1rpc.io/bnb'),
      http('https://bsc-dataseed1.binance.org/'),
    ]),
    [bscTestnet.id]: http('https://bsc-testnet-rpc.publicnode.com'),
    [mainnet.id]: http('https://ethereum-rpc.publicnode.com'),
    [polygon.id]: http('https://polygon-bor-rpc.publicnode.com'),
  },
})

export const wagmiConfig = wagmiAdapter.wagmiConfig

export const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata: {
    name: 'UniFactory DEX',
    description: 'Decentralized Exchange powered by Uniswap V3',
    url: 'https://appsource.github.io/dex',
    icons: ['https://appsource.github.io/dex/favicon.png'],
  },
  themeMode: 'dark',
  features: { analytics: false },
})

reconnect(wagmiConfig)
export default modal
