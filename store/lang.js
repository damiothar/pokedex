export const state = () => {
	return {
		locale: 'en',
		t: {
			en: {
				general: {
					prev: 'Prev',
					next: 'Next',
					back: 'Go back',
				},
				home: {
					title: 'First gen pokedex',
				},
				pokemon: {
					characteristic: 'Characteristic',
					abilities: 'Abilities',
				},
			},
			es: {
				general: {
					prev: 'Ant',
					next: 'Sig',
					back: 'Volver',
				},
				home: {
					title: 'Pokedex de primera generacion',
				},
				pokemon: {
					characteristic: 'Caracteristica',
					abilities: 'Habilidades',
				},
			},
		},
	};
};

export const mutations = {
	SET_LOCALE(state, locale) {
		state.locale = locale;
	},
};
