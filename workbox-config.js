module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,jpg,webp,ico,html,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};