import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
       find: "@", replacement: path.resolve(__dirname, "./src") 
    }
  },
  base: '/',
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      exclude: [],
    }
  },
})

