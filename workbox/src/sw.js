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
    "url": "1.js",
    "revision": "49cb900f2ec9894948780fdd2a68ed9e"
  },
  {
    "url": "2.js",
    "revision": "e9427a79fad2192cf6a103c62d195940"
  },
  {
    "url": "3.js",
    "revision": "c4d95b2ac3ae577d116058b176b1da36"
  },
  {
    "url": "4.js",
    "revision": "2da64fa6a2c60d561d0e09a2cd1d7b83"
  },
  {
    "url": "hasselhoff-hed-1280x720.jpeg",
    "revision": "5a4a751e5d7c5ad38006e88b43038702"
  },
  {
    "url": "index.html",
    "revision": "5084252b3928e031500c290aae83417a"
  },
  {
    "url": "star-wars-ascenso-skywalker_0.jpg",
    "revision": "775ff0af97ee87e2f5a180a93ad464e7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
