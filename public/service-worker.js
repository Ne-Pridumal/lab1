const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html'];

const self = this;

//Install SW
self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then((cache) => {
				console.log('opened cache');
				return cache.addAll(urlsToCache);
			})
	)
});

//Listen to req
self.addEventListener('fetch', event => {

});

//Activate SW
self.addEventListener('activate', event => {

});