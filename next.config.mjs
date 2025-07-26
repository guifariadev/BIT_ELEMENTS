/** @type {import('next').NextConfig} */
const nextConfig = {
   webpack(config) {
    config.module.rules.push({
      test: /\.jsx?$/,
      resourceQuery: /raw/,
      use: "raw-loader",  
    })

    return config
  },
};
// module.exports = nextConfig
export default nextConfig;
