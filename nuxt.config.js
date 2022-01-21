export default {
	head: {
		title: 'Pokedex',
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
		'~/style/index.scss',
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
		scss: ['~/style/_utils.scss'],
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
