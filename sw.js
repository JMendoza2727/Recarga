// Recargué: network-first para documentos; offline con última copia válida.
const CACHE="recargue-offline-v22";
const CORE=["./index.html","./manifest.webmanifest","./icons/recargue-192.png","./icons/recargue.svg"];
const SCOPE=self.registration.scope;
const localUrl=path=>new URL(path,SCOPE).href;
const owned=name=>name.startsWith("recargue-")||name.startsWith("recarga-control-");
const cacheable=response=>response&&response.ok&&response.status===200&&!response.redirected&&response.type!=="opaqueredirect";
self.addEventListener("install",event=>{
 event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  await cache.addAll(CORE.map(path=>new Request(localUrl(path),{cache:"reload",redirect:"error"})));
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
 // El visor de PDF de Safari debe hablar directamente con el servidor,
 // incluidas las solicitudes parciales Range.
 if(url.pathname.toLowerCase().endsWith(".pdf")||request.headers.has("range"))return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  const navigation=request.mode==="navigate";
  const fallback=async()=>{
   const cached=await cache.match(request,{ignoreSearch:true});
   if(cached&&!cached.redirected)return cached;
   if(navigation){
    const home=await cache.match(localUrl("./index.html"));
    if(home&&!home.redirected)return home;
   }
   return Response.error();
  };
  // Con conexión priorizar siempre el servidor, sin devolver HTML obsoleto.
  try{
   const response=await fetch(request,{cache:"no-store",redirect:"error"});
   if(cacheable(response)){
    event.waitUntil(cache.put(request,response.clone()).catch(()=>{}));
    return response;
   }
   return await fallback();
  }catch(err){return await fallback();}
 })());
});
