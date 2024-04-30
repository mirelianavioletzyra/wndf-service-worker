import { skipWaiting, clientsClaim } from 'workbox-core'
import { Prefetcher, prefetch } from '@edgio/prefetch/sw'
import DeepFetchPlugin from '@edgio/prefetch/sw/DeepFetchPlugin'

skipWaiting()
clientsClaim()

new Prefetcher({
  plugins: [
    new DeepFetchPlugin([
      {
        as: 'style',
        maxMatches: 10,
        attribute: 'href',
        selector: 'link[type="text/css"]'
      },
      {
        as: 'script',
        maxMatches: 25,
        attribute: 'src',
        selector: 'script[src]',
        callback: ({ $el }) => {
          const src = $el.attr('src')
          if (src && src !== 'https://rum.edgio.net/latest.js')
            prefetch(src)
        }
      },
      {
        // PDP thumbnails
        as: 'image',
        maxMatches: 2,
        attribute: 'src',
        selector: 'ul.products img'
      },
      {
        // PLP post image
        as: 'image',
        maxMatches: 2,
        attribute: 'src',
        selector: 'div.woocommerce-product-gallery--with-images > div img.wp-post-image'
      },
      {
        // PLP slideshow images
        as: 'image',
        maxMatches: 4,
        attribute: 'src',
        selector: 'div.woocommerce-product-gallery--with-images > ol img'
      }
    ])
  ]
}).route()

