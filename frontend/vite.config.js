import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
    react(),
    compression({
      algorithm: 'gzip',  
      ext: '.gz', 
      deleteOriginFile: false,
    })
  ],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
	base: '/',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
});
