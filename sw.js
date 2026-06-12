self.addEventListener('install', e => e.waitUntil(caches.open('v1')));
self.addEventListener('fetch', e => {});
