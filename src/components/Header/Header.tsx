import { NavLink } from 'react-router-dom'

interface HeaderProps {
  projectName?: string
}

export default function Header({ projectName }: HeaderProps) {
  const name = projectName || 'UniFactory DEX'

  return (
    <header className="border-b border-gray-800 bg-gray-950">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
        <div className="flex items-center gap-8">
          <span className="font-bold text-lg text-white">{name}</span>
          <nav className="flex gap-1">
            <NavLink
              to="/swap"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`
              }
            >
              Swap
            </NavLink>
            <NavLink
              to="/pool"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`
              }
            >
              Pool
            </NavLink>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`
              }
            >
              Admin
            </NavLink>
          </nav>
        </div>
        <appkit-button />
      </div>
    </header>
  )
}
