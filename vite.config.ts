import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Это позволяет использовать process.env.API_KEY в коде клиента,
      // так как Vite по умолчанию не передает переменные окружения Node.js в браузер.
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  };
});