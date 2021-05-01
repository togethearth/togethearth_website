/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: require('@sveltejs/adapter-static')(),
		target: '#svelte'
	}
};
