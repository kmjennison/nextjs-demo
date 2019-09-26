/* eslint no-console: 0 */
const { createServer } = require('http')
const { join } = require('path')
const { parse } = require('url')
const next = require('next')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

// https://github.com/hanford/next-offline#now-10
app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl
    if (pathname === '/service-worker.js') {
      // Service worker JS is in the .next/static/ directory.
      // https://github.com/hanford/next-offline/issues/141
      const filePath = join(__dirname, '.next', 'static', pathname)

      app.serveStatic(req, res, filePath)
    } else if (pathname === '/favicon.ico') {
      // Reroute favicon.ico to the static directory.
      const filePath = join(__dirname, '.next', 'static', pathname)
      app.serveStatic(req, res, filePath)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, () => {
    console.log(`> Ready on http://localhost:${3000}`)
  })
})
