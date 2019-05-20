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
    'url': 'index.html',
    'revision': '536984d64dbc30ae8004cb50188df47f'
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
    'revision': '634d9b6170e8ae97e90fea108f1dfd9d'
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
    'revision': '9cc7b3487c196f086e493bdb98ce5404'
  },
  {
    'url': 'images/checkbox.png',
    'revision': 'eee2913f187c344c8f159cdc2270d34c'
  },
  {
    'url': 'images/checkbox-checked.png',
    'revision': '1294bac69cf2811f38f63d7f924e0e28'
  },
  {
    'url': 'images/icons/icon-512x512.png',
    'revision': 'c665494f7339f1081378cf2f33f41181'
  }
].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
