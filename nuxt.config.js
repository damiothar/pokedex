export default {
	head: {
		title: 'Pokedex',
		link: [
			{
				rel: 'preconnect',
				href: 'https://fonts.googleapis.com',
			},
			{
				rel: 'preconnect',
				href: 'https://fonts.gstatic.com',
				crossorigin: true,
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap',
				crossorigin: true,
			},
		],
	},

	// # PLUGINS
	plugins: ['~/plugins/helpers.js', '~/plugins/filters.js'],

	// # AUTO IMPORT COMPONENTS
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],

	// # GLOBAL CSS
	css: [
		'normalize.css/normalize.css',
		'nes.css/css/nes.css',
		'~/styles/index.scss',
	],

	// # ROUTER
	router: {
		base: '/pokedex/',
		linkActiveClass: null,
		linkExactActiveClass: '--active',
	},

	// # LOADING
	loading: false,

	// # MODULES
	modules: [
		'@nuxtjs/style-resources', //
		'@nuxtjs/axios',
		// '@nuxtjs/i18n',
	],

	// # STYLE RESOURCES MODULE
	styleResources: {
		scss: ['~/styles/_utils.scss'],
	},

	// # BUILD MODULES
	buildModules: [
		[
			'@nuxtjs/eslint-module',
			{
				fix: true,
			},
		],
	],

	// # TELEMETRY (DATA COLLECTION NUXT PROJECT)
	telemetry: false,

	target: 'static',
};
