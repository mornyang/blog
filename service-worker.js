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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "96714057d3cf730ef148b3b5bc3a7113"
  },
  {
    "url": "about/index.html",
    "revision": "970a332d060201f98fd058f78eca16e4"
  },
  {
    "url": "assets/css/0.styles.63c7b923.css",
    "revision": "9164dff109f38a85bbc9eaa67bce1497"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.a68dd455.js",
    "revision": "6204369811a20bc0ad152cdea41e0496"
  },
  {
    "url": "assets/js/3.4fb85abf.js",
    "revision": "abd549b09ff61cd21979ce0ad6462e03"
  },
  {
    "url": "assets/js/4.ea844f04.js",
    "revision": "2de323b7108e881d1ecf12ba10a8034e"
  },
  {
    "url": "assets/js/5.e54811b1.js",
    "revision": "8b400bdd6f7100a21ddd8529a47ef985"
  },
  {
    "url": "assets/js/6.48f03d50.js",
    "revision": "06ed1c02f6bec297c27c5e6ea76fd050"
  },
  {
    "url": "assets/js/7.831260b9.js",
    "revision": "52c953546451c7dc0d13c7ee243c09e2"
  },
  {
    "url": "assets/js/app.d1920a15.js",
    "revision": "de20197e9f4e5d7dc34dcf7aa8e56a3c"
  },
  {
    "url": "blog/1.html",
    "revision": "18a676ee2bd0e84fa8bca5d22648a1d9"
  },
  {
    "url": "img/avatar.jpg",
    "revision": "5ec385c84055784876a943ddf27ba6dc"
  },
  {
    "url": "img/logo.png",
    "revision": "5944c64e59163893666fa2908958da86"
  },
  {
    "url": "index.html",
    "revision": "7bde630b37a23cc6efe9c6717a52db58"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
