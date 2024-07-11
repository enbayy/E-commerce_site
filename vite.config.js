import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
function resolveSrc(_path) {
  return path.resolve(__dirname, "./src", _path)
}
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@eb": resolveSrc(""),
    },
  },
})