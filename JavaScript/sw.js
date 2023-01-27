const STATIC_CACHE = "static";
//
const APP_SHELL =[
    "/",
    "index.html",
    "styles/style.css",
    "js/functions.js",
    "js/main.js",
    "js/script1.js",
    "js/script2.js",
    "images/woodys.png",
];

self.addEventListener("install", (e) => {
    const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});

//

self.addEventListener("fetch", (e) => {
    console.log("fetch! ", e.request);

    e.respondWhit(
        caches
        .match(e.request)
        .then(res => res || fetch(e.request))
        .catch(console.log)
    );
});