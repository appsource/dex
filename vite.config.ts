import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/dex/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          wagmi: ['wagmi', 'viem'],
          appkit: ['@reown/appkit', '@reown/appkit-adapter-wagmi'],
          uniswap: ['@uniswap/v3-sdk', '@uniswap/sdk-core'],
        },
      },
    },
  },
})
