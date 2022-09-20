/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["cvr.com.vn"],
  },
  experimental: {
    isrMemoryCacheSize: 0,
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: "json",
      use: "yaml-loader",
    });

    return config;
  },
};
