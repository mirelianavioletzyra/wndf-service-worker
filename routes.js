import { Router } from '@edgio/core'
import { starterRoutes } from '@edgio/starter'

export default new Router()
  .use(starterRoutes)
  .match('/', {
    response: {
      set_response_body: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Test Doc</title>
  <script src="/browser.js" defer></script>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`
    }
  })
  .match('/browser.js', ({ serveStatic }) => {
    serveStatic('/dist/browser.js')
  })
  .match('/service-worker.js', ({ serviceWorker }) => {
    serviceWorker('dist/service-worker.js')
  })
