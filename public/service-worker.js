console.log("Hey Im Connected")


const CACHE_NAME = "static-cache-v2"
const DATA_CACHE_NAME = "data-cache-v1"

const FILES_TO_CACHE = [
    "/",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",
    "/index.html",
    "/index.js",
    "/manifest.webmanifest",
    "/styles.css"
]

// Add all files to cache
self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(DATA_CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
    )
})