/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rushaus.pankow.digital',
            },
        ],
    },
    i18n: {
        locales: ['ru', 'de'],
        defaultLocale: 'ru',
    },
}

module.exports = nextConfig
