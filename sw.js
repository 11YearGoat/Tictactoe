self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('adi-tictactoe').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './tictactoe.html',
        './manifest.json',
        './icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
