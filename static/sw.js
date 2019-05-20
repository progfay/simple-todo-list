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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "images/icons/favicon.ico",
    "revision": "cf730f14d4a292a2e851507365ed4eef"
  },
  {
    "url": "index.html",
    "revision": "667ac7b2c5a383ef41044d07ab85d986"
  },
  {
    "url": "manifest.json",
    "revision": "6c7b98ba031dd8be76dbfe6f47b10542"
  },
  {
    "url": "script/todo-form.js",
    "revision": "60982d45ec701762c60835c01009ce1c"
  },
  {
    "url": "script/todo-list-item.js",
    "revision": "a1137e5a604e186d17b33cc13e90cadc"
  },
  {
    "url": "script/todo-list.js",
    "revision": "b1da7bbe0bf6447f29d109cac2b7375c"
  },
  {
    "url": "script/util.js",
    "revision": "6f054cc5bc51772b63984483229654e6"
  },
  {
    "url": "style.css",
    "revision": "0ea6950c13ddf5692cb28cd013edb42c"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "c665494f7339f1081378cf2f33f41181"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
