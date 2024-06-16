// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // config.resolve.alias = {
      //   ...config.resolve.alias,
      //   // primus: false
      // };
    }
    return config;
  }
};

export default nextConfig;
