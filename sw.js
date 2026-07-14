// Service Worker بسيط — الحد الأدنى المطلوب لتفعيل تثبيت PWA على أندرويد
const CACHE_NAME = 'radar-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // شبكة أولاً، مع سقوط بسيط بدون كاش معقّد (كافي لمتطلبات التثبيت)
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
