// eslint-disable-next-line no-unused-vars
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
// eslint-disable-next-line no-unused-vars
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/counter_application/',
})
