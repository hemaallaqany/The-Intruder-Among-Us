const CACHE_NAME = 'imposter-game-v2';

// القائمة الكاملة بالملفات والروابط الخارجية التي تحتاجها اللعبة للعمل بدون إنترنت
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  // حفظ الخطوط الخارجية من جوجل لتعمل بدون إنترنت
  'https://fonts.googleapis.com/css2?family=Cairo:wght=400;600;700;900&display=swap',
  'https://fonts.gstatic.com/s/cairo/v28/SLXGc1gqgSS922SG-GAfeaE.woff2' 
];

// جلب وتخزين الملفات أثناء تثبيت التطبيق لأول مرة
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('جاري حفظ ملفات اللعبة للعمل بدون إنترنت...');
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// تنظيف الذاكرة القديمة في حال قمت بتحديث اللعبة مستقبلاً
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('تنظيف الملفات المؤقتة القديمة:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// استدعاء الملفات مباشرة من ذاكرة الهاتف عند انقطاع الإنترنت (Network First / Cache Fallback)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // إذا كان الملف محفوظاً، افتحه فوراً
      }
      return fetch(e.request).catch(() => {
        // إذا فشل الاتصال بالإنترنت والملف غير محفوظ، يمكنك إرجاع صفحة مخصصة أو ترك المتصفح يتعامل معها
      });
    })
  );
});
