if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + ".js", a).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, c) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let r = {};
    const t = (e) => n(e, i),
      o = { module: { uri: i }, exports: r, require: t };
    s[i] = Promise.all(a.map((e) => o[e] || t(e))).then((e) => (c(...e), r));
  };
}
define(["./workbox-588899ac"], function (e) {
  "use strict";
  importScripts("fallback-M4S5xtvWiXvVgaaeKVs9m.js"),
    self.skipWaiting(),
          e.clientsClaim(),
        
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/M4S5xtvWiXvVgaaeKVs9m/_buildManifest.js",
          revision: "b2afe5cefdfe5eb3a3c2bc9167a96e8f",
        },
        {
          url: "/_next/static/M4S5xtvWiXvVgaaeKVs9m/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/310-a107f7c0dbfb933c.js",
          revision: "a107f7c0dbfb933c",
        },
        {
          url: "/_next/static/chunks/497-fb83cbf629b66949.js",
          revision: "fb83cbf629b66949",
        },
        {
          url: "/_next/static/chunks/535-1c41c6e562cf235f.js",
          revision: "1c41c6e562cf235f",
        },
        {
          url: "/_next/static/chunks/649-38b455fc899bec8f.js",
          revision: "38b455fc899bec8f",
        },
        {
          url: "/_next/static/chunks/framework-2c79e2a64abdb08b.js",
          revision: "2c79e2a64abdb08b",
        },
        {
          url: "/_next/static/chunks/main-129e5da6b2161174.js",
          revision: "129e5da6b2161174",
        },
        {
          url: "/_next/static/chunks/pages/404-2419f82b79a5d91b.js",
          revision: "2419f82b79a5d91b",
        },
        {
          url: "/_next/static/chunks/pages/_app-ffe2bdc4dcb6b08d.js",
          revision: "ffe2bdc4dcb6b08d",
        },
        {
          url: "/_next/static/chunks/pages/_error-8353112a01355ec2.js",
          revision: "8353112a01355ec2",
        },
        {
          url: "/_next/static/chunks/pages/_offline-4cc0e7324fea4f65.js",
          revision: "4cc0e7324fea4f65",
        },
        {
          url: "/_next/static/chunks/pages/about-c5e5fd288a5fd790.js",
          revision: "c5e5fd288a5fd790",
        },
        {
          url: "/_next/static/chunks/pages/index-cc69edb4feef7161.js",
          revision: "cc69edb4feef7161",
        },
        {
          url: "/_next/static/chunks/pages/projects-6bd99879d31ac67f.js",
          revision: "6bd99879d31ac67f",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-6ef43a8d4a395f49.js",
          revision: "6ef43a8d4a395f49",
        },
        {
          url: "/_next/static/css/b61cbd1b787cdbf1.css",
          revision: "b61cbd1b787cdbf1",
        },
        {
          url: "/_next/static/media/591327bf3b62a611.woff2",
          revision: "0ed299a4bb5262e17e2145783b2c18f1",
        },
        {
          url: "/_next/static/media/87c72f23c47212b9.woff2",
          revision: "790d0c8dbcd491d29d58f1369c199d40",
        },
        {
          url: "/_next/static/media/916d3686010a8de2.p.woff2",
          revision: "9212f6f9860f9fc6c69b02fedf6db8c3",
        },
        { url: "/_offline", revision: "M4S5xtvWiXvVgaaeKVs9m" },
        {
          url: "/android-chrome-192x192.png",
          revision: "b2b1de718520dee715b70c31aeba3ec4",
        },
        {
          url: "/android-chrome-512x512.png",
          revision: "33b69d88d1aea373a68244d52e512e03",
        },
        {
          url: "/apple-touch-icon.png",
          revision: "1e466bccdecb4481a0030ac62145d13b",
        },
        {
          url: "/favicon-16x16.png",
          revision: "b911c70f6f8d7f58b4da3384df06ca55",
        },
        {
          url: "/favicon-32x32.png",
          revision: "b31e41bfc4d4d2ea756c34903960672c",
        },
        { url: "/favicon.ico", revision: "18404307ca92cf17e104e33e522f584f" },
        {
          url: "/icon-192x192.png",
          revision: "23e2d1b00c4c80e6dad9b26aecb4f70e",
        },
        {
          url: "/icon-256x256.png",
          revision: "fa0dfc7280c7a6569872cf745fea3de5",
        },
        {
          url: "/icon-384x384.png",
          revision: "5eeb58173d3bf944d151e41c02831f1f",
        },
        {
          url: "/icon-512x512.png",
          revision: "0adedbed0e75894a4bbe5de4d1eef3b4",
        },
        { url: "/manifest.json", revision: "9421843cc6e0e7ca19a776acad72d851" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/thirteen.svg", revision: "53f96b8290673ef9d2895908e69b2f92" },
        { url: "/vercel.svg", revision: "61c6b19abff40ea7acd577be818f3976" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    );
});
