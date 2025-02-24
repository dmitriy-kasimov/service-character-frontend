import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: { exportType: 'default' },
        }),
    ],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    base: './',
    build: {
        outDir: 'A:/Alone/PROJECTS/GTA5/Project-1114/server/resources/service-character/frontend',
        emptyOutDir: true,
        minify: 'esbuild',
        reportCompressedSize: false,
    },
});
