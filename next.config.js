const nextConfig = {
    webpack: (config, { isDev, isServer }) => {
        if (isDev && !isServer) {
        config.cache = false;
      }
      return config;
    },
  };
  
  module.exports = nextConfig;