import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { ProxyOptions } from 'vite';

// Main Vite configuration. See https://vite.dev/config/
export default defineConfig(() => {

  // SECTION Proxy configuration for development.
  const proxyConfig: Record<string, string | ProxyOptions> = {};
  // !SECTION

  return {
    plugins: [
      react(),
    ],
    server: {
      host: "0.0.0.0",
      port: 3001,
      proxy: proxyConfig,
    },
  }
})

