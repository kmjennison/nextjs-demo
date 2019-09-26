const withOffline = require('next-offline')

// https://github.com/hanford/next-offline#now-20
const nextConfig = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  // Whether to enable the SW in development. We're running into
  // a 404 in development for _error.js (but not in prod), so this
  // doesn't work. Related issue:
  // https://github.com/hanford/next-offline/issues/190
  generateInDevMode: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    cleanupOutdatedCaches: true,
    clientsClaim: true,
    skipWaiting: true,
    // TODO:
    // Configure different strategies:
    // https://github.com/hanford/next-offline#cache-strategies
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'https-calls',
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
            // Automatically cleanup if quota is exceeded.
            purgeOnQuotaError: true,
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}

module.exports = withOffline(nextConfig)
