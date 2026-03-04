import { useState } from 'react'
import { useAccount, useChainId, useWriteContract } from 'wagmi'
import { useStorageConfig } from '../../hooks/useStorageConfig'
import { saveAppData, getCurrentDomain } from '../../storage/contract'
import { type Hex } from 'viem'

interface ChainContractsForm {
  factory: string
  router: string
  quoter: string
  positionManager: string
}

export default function AdminPanel() {
  const { address, isConnected } = useAccount()
  const chainId = useChainId()
  const { config, domain } = useStorageConfig()
  const { writeContractAsync } = useWriteContract()

  const existingContracts = config?.contracts?.[String(chainId)] || {}

  const [contracts, setContracts] = useState<ChainContractsForm>({
    factory: (existingContracts.factory as string) || '',
    router: (existingContracts.router as string) || '',
    quoter: (existingContracts.quoter as string) || '',
    positionManager: (existingContracts.positionManager as string) || '',
  })
  const [branding, setBranding] = useState({
    projectName: config?.projectName || '',
    brandColor: config?.brandColor || '#2172E5',
    logo: config?.logo || '',
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSave = async () => {
    if (!address) {
      setError('Connect wallet to save')
      return
    }

    setSaving(true)
    setError(null)
    setSuccess(false)

    try {
      await saveAppData({
        domain: domain || getCurrentDomain(),
        owner: address,
        data: {
          projectName: branding.projectName,
          brandColor: branding.brandColor,
          logo: branding.logo,
          contracts: {
            [String(chainId)]: {
              factory: contracts.factory || undefined,
              router: contracts.router || undefined,
              quoter: contracts.quoter || undefined,
              positionManager: contracts.positionManager || undefined,
            },
          },
        },
        writeContract: (args: object) => writeContractAsync(args as any),
      })
      setSuccess(true)
      setTimeout(() => setSuccess(false), 5000)
    } catch (e: any) {
      setError(e?.shortMessage || e?.message || 'Save failed')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="bg-gray-900 rounded-3xl border border-gray-800 p-6 max-w-lg w-full mx-auto">
      <h2 className="text-lg font-semibold text-white mb-1">Admin Panel</h2>
      <p className="text-xs text-gray-500 mb-6">
        Domain: <span className="text-gray-300 font-mono">{domain || getCurrentDomain()}</span>
        {config?.admin && (
          <span className="ml-3">
            Owner: <span className="text-gray-300 font-mono text-xs">{config.admin.slice(0, 6)}…{config.admin.slice(-4)}</span>
          </span>
        )}
      </p>

      {/* Contracts section */}
      <section className="mb-6">
        <h3 className="text-sm font-medium text-gray-300 mb-3">
          Contracts (Chain ID: {chainId})
        </h3>
        <div className="space-y-3">
          {(
            [
              { key: 'factory', label: 'Factory', hint: 'UniswapV3Factory address' },
              { key: 'router', label: 'Router', hint: 'SwapRouter02 address' },
              { key: 'quoter', label: 'Quoter (V3)', hint: 'QuoterV2 address — enables V3 price quotes' },
              { key: 'positionManager', label: 'Position Manager', hint: 'NonfungiblePositionManager address' },
            ] as const
          ).map(({ key, label, hint }) => (
            <div key={key}>
              <label className="text-xs text-gray-400 mb-1 block">
                {label}
                <span className="ml-2 text-gray-600">{hint}</span>
              </label>
              <input
                value={contracts[key]}
                onChange={(e) => setContracts((prev) => ({ ...prev, [key]: e.target.value }))}
                placeholder="0x..."
                className="w-full bg-gray-800 text-white rounded-xl px-3 py-2 text-sm border border-gray-700 font-mono"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Branding section */}
      <section className="mb-6">
        <h3 className="text-sm font-medium text-gray-300 mb-3">Branding</h3>
        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Project Name</label>
            <input
              value={branding.projectName}
              onChange={(e) => setBranding((prev) => ({ ...prev, projectName: e.target.value }))}
              placeholder="My DEX"
              className="w-full bg-gray-800 text-white rounded-xl px-3 py-2 text-sm border border-gray-700"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Brand Color</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={branding.brandColor}
                onChange={(e) => setBranding((prev) => ({ ...prev, brandColor: e.target.value }))}
                className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
              />
              <input
                value={branding.brandColor}
                onChange={(e) => setBranding((prev) => ({ ...prev, brandColor: e.target.value }))}
                placeholder="#2172E5"
                className="flex-1 bg-gray-800 text-white rounded-xl px-3 py-2 text-sm border border-gray-700 font-mono"
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Logo URL</label>
            <input
              value={branding.logo}
              onChange={(e) => setBranding((prev) => ({ ...prev, logo: e.target.value }))}
              placeholder="https://..."
              className="w-full bg-gray-800 text-white rounded-xl px-3 py-2 text-sm border border-gray-700"
            />
          </div>
        </div>
      </section>

      {error && (
        <div className="mb-4 p-3 bg-red-900/30 border border-red-700/50 rounded-xl text-sm text-red-300">{error}</div>
      )}
      {success && (
        <div className="mb-4 p-3 bg-green-900/30 border border-green-700/50 rounded-xl text-sm text-green-300">
          ✓ Config saved to BSC Storage!
        </div>
      )}

      <button
        onClick={handleSave}
        disabled={!isConnected || saving}
        className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-2xl transition-colors"
      >
        {saving ? 'Saving to BSC Storage...' : !isConnected ? 'Connect Wallet to Save' : 'Save Configuration'}
      </button>

      <p className="mt-3 text-xs text-gray-600 text-center">
        Saving requires a BSC transaction. Only the domain owner can update settings.
      </p>
    </div>
  )
}
