/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc'],
  },
  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ['en-US', 'de-DE', 'es-ES'],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: 'en-US',
    // localeDetection: false,
  },
};

module.exports = nextConfig;
