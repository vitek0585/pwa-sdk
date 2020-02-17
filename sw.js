self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('credoapp-store').then(function(cache) {
        return cache.addAll([
          '/',
          '/css/style.css',
          '/img/0.png',
          '/img/background.png',
          '/img/logo.png',
          '/scripts/mask.js',
          '/scripts/script.js',
          '/scripts/validate.js',
          '/credoappClient.js',
          '/credoappsdk.js',
          '/form.html',
          '/index.html',
          '/loader_only.js',
          '/prevform.html',
          '/result.html'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });