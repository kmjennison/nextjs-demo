const withOffline = require('next-offline')

// https://github.com/hanford/next-offline#now-20
const nextConfig = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  generateInDevMode: false, // whether to enable the SW in development
  workboxOpts: {
    swDest: 'static/service-worker.js',
    // TODO:
    // Configure different strategies:
    // https://github.com/hanford/next-offline#cache-strategies
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
};

module.exports = withOffline(nextConfig)