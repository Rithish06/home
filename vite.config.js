import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { useForm } from "react-hook-form";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-hook-form"]
    }
  }
})

