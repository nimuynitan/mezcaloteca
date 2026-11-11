// Service Worker — Mezcaloteca
// Estrategia: cache-first para los archivos estáticos de la app
// Cambiá CACHE_VERSION cuando publiques cambios para invalidar el cache viejo

const CACHE_VERSION = 'mezcaloteca-v1';
const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/favicon-96.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  // Solo cacheamos same-origin
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cacheamos la respuesta si es exitosa
        if (response.status === 200 && response.type === 'basic') {
          const cloned = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, cloned));
        }
        return response;
      }).catch(() => {
        // Offline fallback: devolver el index para navegaciones
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
