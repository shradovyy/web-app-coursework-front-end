var cacheName = 'classes-v1';
var cacheFiles = [
  'index.html',
  'app.js',
  'style.css',
  'app.webmanifest',
  'icons/ball.png',
  'icons/basketball-ball.png',
  'icons/calculator.png',
  'icons/english-language.png',
  'icons/football-ball.png',
  'icons/french.png',
  'icons/guitar.png',
  'icons/locations.png',
  'icons/spanish-language.png',
  'icons/swimming.png',
];

self.addEventListener('fetch', function (e) {
    e.respondWith(
        // check if the cache has the file
        caches.match(e.request).then(function (r) {
            console.log('[Service Worker] Fetching resource: '
              + e.request.url);
            // 'r' is the matching file if it exists in the cache
return r })
);
});


self.addEventListener('fetch', function (e) {
    e.respondWith(
      caches.match(e.request).then(function (r) {
        // Download the file if it is not in the cache,
        return r || fetch(e.request).then(function (response) {
          // add the new file to cache
          return caches.open(cacheName).then(function (cache) {
            cache.put(e.request, response.clone());
            return response;
  }); });
  }) );
  });