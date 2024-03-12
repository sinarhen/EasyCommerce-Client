/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',// Delete this line after testing
            },
            {
                protocol: 'https',
                hostname: '**.**',
                port: '',
            },
        ]
    }
};

export default nextConfig;
