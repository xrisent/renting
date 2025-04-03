import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  images: {
    domains: ['ak-sai.com'], // Add the domain here
  },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);