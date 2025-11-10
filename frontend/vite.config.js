import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
    react(),
    compression({
      algorithm: 'gzip',       // nén gzip
      ext: '.gz',              // file nén sẽ có đuôi .gz
      deleteOriginFile: false, // giữ file gốc không nén
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
