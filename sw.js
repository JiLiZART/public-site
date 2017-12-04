importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "public-site",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.0212b0271a087ffe4f6e.js",
    "revision": "33b659bf33c5a9a0c839c0a4f0e78b96"
  },
  {
    "url": "/_nuxt/common.f0f2fd79500355fab943.js",
    "revision": "0acb3e61bce903f2fabc6be046c1e479"
  },
  {
    "url": "/_nuxt/layouts/default.47cca7fa19601f5e0f9e.js",
    "revision": "833cbe600cc96ab5aa6af6d41fb4e3f7"
  },
  {
    "url": "/_nuxt/manifest.8ba82e9c7c5861e68a1e.js",
    "revision": "b3418998378d8648da204794b272d741"
  },
  {
    "url": "/_nuxt/pages/index.810b12f18d3e20b30337.js",
    "revision": "71ba5325edca0c09a0b458968651e547"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

