import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: ['ak-sai.com'],
  },
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/en/cars/1',
        has: [
          {
            type: 'header',
            key: 'accept-language',
          },
        ],
        permanent: false,
      },
      {
        source: '/ru',
        destination: '/ru/cars/1',
        has: [
          {
            type: 'header',
            key: 'accept-language',
          },
        ],
        permanent: false,
      },
    ];
  }
  
};

export default withNextIntl(nextConfig);