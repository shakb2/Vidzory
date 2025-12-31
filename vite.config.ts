import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  // Check both standard API_KEY and VITE_GEMINI_API_KEY
  const apiKey = env.API_KEY || env.VITE_GEMINI_API_KEY;

  return {
    plugins: [react()],
    define: {
      // This makes the API key available as process.env.API_KEY in the app
      'process.env.API_KEY': JSON.stringify(apiKey)
    },
    server: {
      host: '0.0.0.0', // Required for Replit
      allowedHosts: true // Allow Replit domains
    }
  };
});
