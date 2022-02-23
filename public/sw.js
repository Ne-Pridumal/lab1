const cacheData = 'version-2';
const cachedFiles = ['/index.html', '/offline.html'];
this.addEventListener('install', event => {
	event.waitUntil(
		caches.open(cacheData).then((cache) => {
			cache.addAll(cachedFiles)
		})
	)
})
this.addEventListener("fetch", (event) => {

	if (!navigator.onLine) {
		event.respondWith(
			caches.match(event.request).then((resp) => {
				if (resp) {
					return resp
				}
				let requestUrl = event.request.clone();
				fetch(requestUrl)
			})
		)
	}
}) 