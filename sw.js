const CACHE_NAME = 'imposter-game-v3';
const ASSETS = [
  './',
  './game phone.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://fonts.googleapis.com/css2?family=Cairo:wght=400;600;700;900&display=swap'
];

// تثبيت الـ Service Worker وتخزين الملفات في الكاش
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('تم فتح الكاش بنجاح وجاري حفظ الملفات...');
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// تفعيل الـ Service Worker وحذف الكاش القديم تلقائياً عند التحديث
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('جاري حذف الكاش القديم:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// جلب الملفات من الكاش عند عدم وجود اتصال بالإنترنت
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }).catch(() => {
      // إذا فشل الجلب تماماً وكان الطلب لصفحة HTML
      if (event.request.headers.get('accept').includes('text/html')) {
        return caches.match('./game phone.html');
      }
    })
  );
});