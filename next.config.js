/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.blibli.com",
                port: "",
                pathname: "/friends-backend/wp-content/uploads/2023/02/**",
            },
        ],
    },
};

module.exports = nextConfig;
