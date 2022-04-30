/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'localhost',
      'i.pravatar.cc',
      'eu.ui-avatars.com',
      'scontent-ham3-1.xx.fbcdn.net',
      'cdn.pixabay.com',
      'lh3.googleusercontent.com',
      'platform-lookaside.fbsbx.com',
    ],
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
