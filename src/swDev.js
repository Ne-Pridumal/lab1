const swDew = () => {
	let swURL = `${process.env.PUBLIC_URL}/sw.js`
	navigator.serviceWorker.register(swURL)
}

export default swDew;