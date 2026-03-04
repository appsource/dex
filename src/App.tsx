import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useStorageConfig } from './hooks/useStorageConfig'
import Header from './components/Header/Header'
import SwapPage from './pages/SwapPage'
import PoolPage from './pages/PoolPage'
import AdminPage from './pages/AdminPage'

function AppContent() {
  const { config, loading } = useStorageConfig()

  // Apply branding from Storage
  if (config?.brandColor) {
    document.documentElement.style.setProperty('--brand-color', config.brandColor)
  }
  if (config?.projectName) {
    document.title = config.projectName
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header projectName={config?.projectName} />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-2xl">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-400">Loading DEX configuration...</div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="/swap" replace />} />
            <Route path="/swap" element={<SwapPage />} />
            <Route path="/pool" element={<PoolPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        )}
      </main>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  )
}
