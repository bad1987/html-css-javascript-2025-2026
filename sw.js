const CACHE_NAME = 'course-v1';
const urlsToCache = [
  '/',
  '/assets/css/main.css',
  '/assets/js/main.js',
  '/search/lunr.js',
  '/search/main.js',
  '/assets/fonts/material-icons.woff2',
  '/assets/javascripts/main.4d1f8a35.min.js',
  '/assets/stylesheets/main.1ef77f51.min.css'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version if available, otherwise fetch from network
        return response || fetch(event.request);
      }
    )
  );
});