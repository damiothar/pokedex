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
		linkActiveClass: null,
		linkExactActiveClass: '--active',
	},

	// # LOADING
	loading: false,

	// # MODULES
	modules: ['@nuxtjs/style-resources', '@nuxtjs/axios', '@nuxtjs/i18n'],

	// # STYLE RESOURCES MODULE
	styleResources: {
		scss: ['~/style/_utils.scss'],
	},

	// # NUXT-I18N MODULE
	i18n: {
		langDir: 'lang/',
		locales: [
			{
				name: 'English',
				shortname: 'ENG',
				code: 'en',
				iso: 'en-US',
				file: 'en-US.js',
				dir: 'ltr',
			},
			{
				name: 'Español',
				shortname: 'ESP',
				code: 'es',
				iso: 'es-ES',
				file: 'es-ES.js',
				dir: 'ltr',
			},
		],
		defaultLocale: 'en',
		lazy: true,
		skipSettingLocaleOnNavigate: true,
		parsePages: false,
		strategy: 'prefix',
		pages: {
			home: { en: '/', es: '/' },
			pokemon: { en: '/pokemon/:id', es: '/pokemon/:id' },
		},
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
};
