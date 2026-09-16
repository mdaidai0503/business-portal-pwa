const CACHE='business-portal-v072';
const ASSETS=['./','./index.html','./manifest.webmanifest'];
self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('activate',e=>e.waitUntil(
  Promise.all([
    self.clients.claim(),
    caches.keys().then(ks=>Promise.all(
      ks.filter(k=>k.startsWith('business-portal-')&&k!==CACHE).map(k=>caches.delete(k))
    ))
  ])
));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const u=new URL(e.request.url);
  if(u.origin!==self.location.origin){ e.respondWith(fetch(e.request)); return; }
  e.respondWith(
    fetch(e.request).then(r=>{
      const copy=r.clone();
      caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});
      return r;
    }).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html')))
  );
});
