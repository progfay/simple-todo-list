module.exports = {
  'globDirectory': 'static',
  'globPatterns': [
    '**/*.{ico,html,json,js,css}',
    'images/icons/icon-512x512.png'
  ],
  'globIgnores': [
    'now.json',
    'workbox-config.js'
  ],
  'swDest': 'static/sw.js'
}
