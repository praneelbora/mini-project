const runtimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa')({
		dest: "public",
		register: true,
		skipWaiting: true,
		runtimeCaching,
		buildExcludes: [/middleware-manifest.json$/]
	}
);

module.exports = withPWA({
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
});
