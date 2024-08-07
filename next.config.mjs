// Import the dotenv package
import { config } from 'dotenv';
config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    VITE_APP_API_KEY: process.env.VITE_APP_API_KEY,
    VITE_APP_AUTH_DOMAIN: process.env.VITE_APP_AUTH_DOMAIN,
    VITE_APP_PROJECT_ID: process.env.VITE_APP_PROJECT_ID,
    VITE_APP_STORAGE_BUCKET: process.env.VITE_APP_STORAGE_BUCKET,
    VITE_APP_MESSAGING_SENDER_ID: process.env.VITE_APP_MESSAGING_SENDER_ID,
    VITE_APP_APP_ID: process.env.VITE_APP_APP_ID,
    VITE_APP_MEASUREMENT_ID: process.env.VITE_APP_MEASUREMENT_ID,
  },
};

export default nextConfig;
