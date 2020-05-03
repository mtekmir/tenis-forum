module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['raw-loader'],
    })

    return config
  },
  serverRuntimeConfig: {
    BACKEND_URL: 'http://localhost:5000/',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    BACKEND_URL: 'http://localhost:5000/',
  },
}
