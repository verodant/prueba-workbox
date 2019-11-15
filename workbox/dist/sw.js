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

if (workbox) {
  console.log(`Workbox is loaded🎉`);

  workbox.core.skipWaiting();
  workbox.precaching.precacheAndRoute([
  {
    "url": "1.js",
    "revision": "7d1a4917e6b42336e5b3d81551a1a7f7"
  },
  {
    "url": "2.js",
    "revision": "2d65290a5bebe1ef028a8c70d41e1ace"
  },
  {
    "url": "3.js",
    "revision": "d5683541010ae0f470400396221c980a"
  },
  {
    "url": "4.js",
    "revision": "2da64fa6a2c60d561d0e09a2cd1d7b83"
  },
  {
    "url": "favicon.ico",
    "revision": "1f21e82dc9994db794beac30493ccdf8"
  },
  {
    "url": "img/hasselhoff-hed-1280x720.jpeg",
    "revision": "5a4a751e5d7c5ad38006e88b43038702"
  },
  {
    "url": "img/star-wars-ascenso-skywalker_0.jpg",
    "revision": "775ff0af97ee87e2f5a180a93ad464e7"
  },
  {
    "url": "index.html",
    "revision": "5b117a801d9a04479b644254b63a2c34"
  }
]);
  workbox.routing.registerRoute(new RegExp('.*.*'), new workbox.strategies.staleWhileRevalidate());

} else {
  console.log(`Workbox didn't load`);
}


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
    "revision": "7d1a4917e6b42336e5b3d81551a1a7f7"
  },
  {
    "url": "2.js",
    "revision": "2d65290a5bebe1ef028a8c70d41e1ace"
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
    "url": "favicon.ico",
    "revision": "1f21e82dc9994db794beac30493ccdf8"
  },
  {
    "url": "img/hasselhoff-hed-1280x720.jpeg",
    "revision": "5a4a751e5d7c5ad38006e88b43038702"
  },
  {
    "url": "img/star-wars-ascenso-skywalker_0.jpg",
    "revision": "775ff0af97ee87e2f5a180a93ad464e7"
  },
  {
    "url": "index.html",
    "revision": "5b117a801d9a04479b644254b63a2c34"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
