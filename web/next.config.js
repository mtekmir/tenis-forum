const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');

module.exports = {
  serverRuntimeConfig: {
    BACKEND_URL: 'http://api:5000/'
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    BACKEND_URL: 'http://localhost:5000/'
  },
  ...withCSS(withTypescript())
};
