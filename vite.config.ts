import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import basicSsl from "@vitejs/plugin-basic-ssl"
import { nodePolyfills } from "vite-plugin-node-polyfills"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    basicSsl(),
    nodePolyfills({
      globals: {
        Buffer: true,
      },
    }),
  ],
  build: {
    outDir: "./docs",
  },
  base: "./tg-mini-app",
})
