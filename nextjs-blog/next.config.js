module.exports = {
    images: {
      domains: ['res.cloudinary.com'],
    },
    webpack: (config, { isServer }) => {
      if (!isServer){
        config.resolve.fallback.fs = false;
        config.resolve.fallback.child_process = false;
      }
      return config;
    }
      // fs: false,
      // path: false
};
