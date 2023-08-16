import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsConfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),tsConfigPaths()],
})

// https://saunabouya.com/2022/08/03/vscode-vite-tsconfig-json-module-not-found/#vite-tsconfig-paths