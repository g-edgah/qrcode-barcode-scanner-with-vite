import { defineConfig } from 'vite'
import fs from 'fs'

export default defineConfig({
  server: {
    host: '0.0.0.0',    // Allows external connections
    https: {            // Enable HTTPS for secure contexts
        key:fs.readFileSync('../localhost+2-key.pem'),
        cert:fs.readFileSync('../localhost+2.pem'),
    },
    port: 443,         // Default Vite port
    strictPort: false,  // Allow different port if 5173 is taken
    open: false         // Don't automatically open browser
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})