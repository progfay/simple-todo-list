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
    'revision': 'db670f21af7639470bd7f9407747f810'
  },
  {
    'url': 'manifest.json',
    'revision': '6c7b98ba031dd8be76dbfe6f47b10542'
  },
  {
    'url': 'script/index.js',
    'revision': 'b2a2ef2f66aa4b8527263b344e9e5b82'
  },
  {
    'url': 'script/todo-list-item.js',
    'revision': '6cb0ee42d7bc2bb224c1de251cbecfc5'
  },
  {
    'url': 'script/todo-list.js',
    'revision': '957c2b8a713f122fe6ed5dff02def938'
  },
  {
    'url': 'script/util.js',
    'revision': '3eb74228f7ba1624ce7788fa6989f1d9'
  },
  {
    'url': 'style.css',
    'revision': 'a0acf6555fe21249ecfce2d9e744102c'
  },
  {
    'url': 'workbox-config.js',
    'revision': 'b491607d4e8f3af0bf3684b3a9c556b2'
  }
].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
