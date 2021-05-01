/** @type {import('@sveltejs/kit').Config} */
const adapter = require('@sveltejs/adapter-static');
module.exports = {
	// kit: {
	// 	// hydrate the <div id="svelte"> element in src/app.html
	// 	adapter: require('@sveltejs/adapter-static')(),
	// 	target: '#svelte'
	// }
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};
