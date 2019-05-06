/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    'url': 'favicon.ico',
    'revision': 'cf730f14d4a292a2e851507365ed4eef'
  },
  {
    'url': 'images/icons/icon-128x128.png',
    'revision': '1e5135e799e7f2f4421aeba4ca4f23e8'
  },
  {
    'url': 'images/icons/icon-144x144.png',
    'revision': '85d1ed563e0f39a2140cab3432eadb92'
  },
  {
    'url': 'images/icons/icon-152x152.png',
    'revision': 'b7c088cdc33e1557dd4a2a0d3eed209d'
  },
  {
    'url': 'images/icons/icon-192x192.png',
    'revision': 'db75989c53cb23c184b51af8b1bfdb1a'
  },
  {
    'url': 'images/icons/icon-384x384.png',
    'revision': '5722be4d522181a0c77552f1f51ad5dd'
  },
  {
    'url': 'images/icons/icon-512x512.png',
    'revision': 'c665494f7339f1081378cf2f33f41181'
  },
  {
    'url': 'images/icons/icon-72x72.png',
    'revision': '63aa1599d4ea7084169fadd0aaf142d2'
  },
  {
    'url': 'images/icons/icon-96x96.png',
    'revision': '3063314b6ccc63d38b09b3cfa9a4b5af'
  },
  {
    'url': 'index.html',
    'revision': 'a97848e0dc00aa0b9ea972f805d3ab20'
  },
  {
    'url': 'manifest.json',
    'revision': '8703baed2180fd1f9e74261e76fe3d62'
  },
  {
    'url': 'script.js',
    'revision': '17f30937c13de5def0ea7fc7eba9d391'
  },
  {
    'url': 'style.css',
    'revision': '0b66ca193415a3c952ddb7ccfffae44f'
  },
  {
    'url': 'workbox-config.js',
    'revision': 'abdddb53d25dc30638c17c729df536e3'
  }
].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
