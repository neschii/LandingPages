import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@salao/ui'] = path.resolve(__dirname, '../packages/ui/src');
    config.resolve.alias['@salao/core'] = path.resolve(__dirname, '../packages/core/src');
    return config;
  },
};

export default nextConfig;