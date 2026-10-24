// Recargué: cache-first para usar la calculadora instalada incluso en modo avión.
const CACHE="recargue-offline-v15";
const CORE=["./","./index.html","./manifest.webmanifest","./convenio-acsa.html","./icons/recargue-192.png","./icons/recargue.svg"];
const SCOPE=self.registration.scope;
const localUrl=path=>new URL(path,SCOPE).href;
const owned=name=>name.startsWith("recargue-")||name.startsWith("recarga-control-");
self.addEventListener("install",event=>{
 event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  await cache.addAll(CORE.map(path=>new Request(localUrl(path),{cache:"reload"})));
  await self.skipWaiting();
 })());
});
self.addEventListener("activate",event=>{
 event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(key=>owned(key)&&key!==CACHE).map(key=>caches.delete(key)));
  await self.clients.claim();
 })());
});
self.addEventListener("fetch",event=>{
 const request=event.request;
 if(request.method!=="GET")return;
 const url=new URL(request.url);
 if(url.origin!==self.location.origin||!url.href.startsWith(SCOPE))return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  const hit=await cache.match(request,{ignoreSearch:true});
  if(hit){
   if(request.mode==="navigate")event.waitUntil(self.registration.update().catch(()=>{}));
   return hit;
  }
  try{
   const response=await fetch(request);
   // El PDF grande no se descarga al instalar; si se abre completo se guarda.
   // No guardar respuestas parciales 206 de los lectores PDF de iOS/Android.
   if(response.ok&&response.status===200&&!request.headers.has("range")){
    event.waitUntil(cache.put(request,response.clone()).catch(()=>{}));
   }
   return response;
  }catch(err){
   if(request.mode==="navigate"){
    const fallback=await cache.match(localUrl("./index.html"));
    if(fallback)return fallback;
   }
   return Response.error();
  }
 })());
});