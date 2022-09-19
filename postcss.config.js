module.exports = {
	plugins: [
		require('autoprefixer'),
		require('cssnano')({
			mergeLonghand: false,
			convertValues: false,
			autoprefixer: false,
			discardUnused: false,
			zindex: false,
			mergeIdents: false,
			reduceIdents: false,
			safe: true,
		}), // minify the result

		require('@fullhuman/postcss-purgecss')({
			content: [
				'./app/**/*.js',
				'./app/**/*.jsx',
				'./app/**/*.mdx',
				'./app/**/*.svg',
				'./app/**/*.ts',
				'./app/**/*.tsx',
				'./netlify/**/*.ts',
				'./netlify/**/*.js',
				'./members/**/*.ts',
				'./members/**/*.js',
				'./remix.config.js',
			],
			dynamicAttributes: ['class', 'title', 'href', 'role', 'type'],
		}),
	],
};
