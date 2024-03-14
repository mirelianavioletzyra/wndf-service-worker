import { install } from '@edgio/prefetch/window'
import { prefetch } from '@edgio/prefetch/window/prefetch'

document.addEventListener('DOMContentLoaded', () => {
  // const { host } = window.location
  install({
    includeCacheMisses: true,
    // watch: [
    //   {
    //     // Prefetch any <a href="/..."></a> tags
    //     selector: `a[href="https://${host}"]`,
    //     callback: (el) => {
    //       const href = el.getAttribute('href')
    //       if (href) prefetch(href)
    //     }
    //   },
    //   {
    //     // Prefetch any <link href="/..."> tags
    //     selector: `link[href^="https://${host}/"]`,
    //     callback: (el) => {
    //       const href = el.getAttribute('href')
    //       if (href) prefetch(href)
    //     },
    //   }
    // ]
  })
})