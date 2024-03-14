import { install } from '@edgio/prefetch/window'

document.addEventListener('DOMContentLoaded', () => {
  install({
    serviceWorkerPath: '/proxied-service-worker.js',
    includeCacheMisses: true,
  })
})