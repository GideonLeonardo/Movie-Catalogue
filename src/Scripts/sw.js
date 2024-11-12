import "regenerator-runtime";
import CacheHelper from "./Utils/cache-helper";

// Daftar asset yang akan di caching
const assetToCache = [
  "./",
  "./src/Public/icons/icons/icon-72x72.png",
  "./src/Public/icons/icons/icon-96x96.png",
  "./src/Public/icons/icons/icon-128x128.png",
  ".src/Public/icons/icons/icon-144x144.png",
  "./src/Public/icons/icons/icon-152x152.png",
  "./src/Public/icons/icons/icon-192x192.png",
  "./src/Public/icons/icons/icon-384x384.png",
  "./src/Public/icons/icons/icon-512x512.png",
  "./index.html",
  "./favicon.png",
  "./app.bundle.js",
  "./app.webmanifest",
  "./sw.bundle.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetToCache]));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
