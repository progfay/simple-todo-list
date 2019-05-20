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
    'revision': 'd654b1c002febe3e144d023ccf101635'
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
    'revision': '79b5f2597a13651c71388acae13e2704'
  },
  {
    'url': 'script/todo-list.js',
    'revision': 'bf225bafc88f1b562fd13b141e01c854'
  },
  {
    'url': 'style.css',
    'revision': '4382718df31799b58580954a951e75ec'
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
    'url': 'images/logo.png',
    'revision': '82ce003d3c0d0c6cf560103628d15fc0'
  }
].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
