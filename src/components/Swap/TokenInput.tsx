interface TokenInputProps {
  label: string
  value: string
  onChange?: (val: string) => void
  tokenAddress: string
  onTokenChange: (addr: string) => void
  tokenList: { address: string; symbol: string; logoURI?: string }[]
  readOnly?: boolean
  loading?: boolean
}

export default function TokenInput({
  label,
  value,
  onChange,
  tokenAddress,
  onTokenChange,
  tokenList,
  readOnly,
  loading,
}: TokenInputProps) {
  const selected = tokenList.find((t) => t.address.toLowerCase() === tokenAddress.toLowerCase())

  return (
    <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-400">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="number"
          value={loading ? '' : value}
          onChange={(e) => onChange?.(e.target.value)}
          readOnly={readOnly}
          placeholder={loading ? 'Loading...' : '0.0'}
          className="flex-1 bg-transparent text-2xl font-medium text-white outline-none placeholder-gray-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          min="0"
        />
        <div className="flex-shrink-0">
          {tokenList.length > 0 ? (
            <select
              value={tokenAddress}
              onChange={(e) => onTokenChange(e.target.value)}
              className="bg-gray-800 text-white rounded-xl px-3 py-2 text-sm font-medium border border-gray-700 cursor-pointer"
            >
              <option value="">Select token</option>
              {tokenList.map((t) => (
                <option key={t.address} value={t.address}>
                  {t.symbol}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={tokenAddress}
              onChange={(e) => onTokenChange(e.target.value)}
              placeholder="Token address"
              className="bg-gray-800 text-white rounded-xl px-3 py-2 text-sm border border-gray-700 w-44"
            />
          )}
        </div>
      </div>
      {selected && (
        <div className="mt-1 text-xs text-gray-500 truncate">{selected.address}</div>
      )}
    </div>
  )
}
