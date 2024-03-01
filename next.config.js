/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['upload.wikimedia.org']
    },
    redirects: async () => {
        return [
            // {
            //     source: '/studentlist/:student',
            //     destination: '/about',
            //     permanent: false,
            // },
        ]
    },
}

module.exports = nextConfig
