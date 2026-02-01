const cacheName = "flappybird-cache-v1";
const filesToCache = [
  "./",
  "./index.html",
  "./flappy_1.gif"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(filesToCache)));
});

self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
