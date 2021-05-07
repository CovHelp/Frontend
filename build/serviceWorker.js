let CACHE_NAME = "cache1";
const urlsToCache = [
  "/",
  "/index.html",
];


this.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

this.addEventListener("fetch", function (event) {
  event.respondWith(caches.match(event.request)
    .then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

this.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
  this.skipWaiting();
});