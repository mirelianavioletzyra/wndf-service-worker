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
        selector: 'script[src]'
      },
      {
        // PDP thumbnails
        as: 'image',
        maxMatches: 5,
        attribute: 'src',
        selector: 'ul.products img'
      },
      {
        // PLP post image
        as: 'image',
        maxMatches: 5,
        attribute: 'src',
        selector: 'div.woocommerce-product-gallery--with-images > div img.wp-post-image'
      },
      {
        // PLP slideshow images
        as: 'image',
        maxMatches: 8,
        attribute: 'src',
        selector: 'div.woocommerce-product-gallery--with-images > ol img'
      }
    ])
  ]
}).route()
