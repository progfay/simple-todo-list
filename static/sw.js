/* global importScripts, self, workbox */

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
    'url': 'images/icons/favicon.ico',
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
    'revision': '2a34fe1c65cbb31a93c7d26c61eae043'
  },
  {
    'url': 'manifest.json',
    'revision': '6c7b98ba031dd8be76dbfe6f47b10542'
  },
  {
    'url': 'script/todo-form.js',
    'revision': '60982d45ec701762c60835c01009ce1c'
  },
  {
    'url': 'script/todo-list-item.js',
    'revision': 'a1137e5a604e186d17b33cc13e90cadc'
  },
  {
    'url': 'script/todo-list.js',
    'revision': 'b1da7bbe0bf6447f29d109cac2b7375c'
  },
  {
    'url': 'script/util.js',
    'revision': '6f054cc5bc51772b63984483229654e6'
  },
  {
    'url': 'style.css',
    'revision': '7ce7b9fcf8b9b78c7fd449aba8124f5e'
  },
  {
    'url': 'workbox-config.js',
    'revision': '6213275c01906ef09d3192260ed348e5'
  }
].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
