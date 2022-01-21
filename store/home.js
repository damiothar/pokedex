export const state = () => {
	return {
		pokemons: [],
		pagination: 1,
		maxPokemonsInPag: 5,
		maxPokemonsTotal: 151,
	};
};

export const getters = {
	maxPagination: (state) => {
		return Math.ceil(state.maxPokemonsTotal / state.maxPokemonsInPag);
	},
	offsetFirst: (state) => {
		return (state.pagination - 1) * state.maxPokemonsInPag;
	},
	offsetLast: (state) => {
		return state.pagination * state.maxPokemonsInPag;
	},
	limit: (state, getters) => {
		if (getters.offsetLast > state.maxPokemonsTotal) {
			const difference = getters.offsetLast - state.maxPokemonsTotal;
			return 5 - difference;
		} else {
			return 5;
		}
	},
};

export const mutations = {
	SET_POKEMONS(state, pokemons) {
		state.pokemons = pokemons;
	},
	SET_PAGINATION(state, pagination) {
		state.pagination = pagination;
	},
};

export const actions = {
	async getPokemons({ getters, commit }) {
		await this.$axios
			.$get(
				`https://pokeapi.co/api/v2/pokemon?limit=${getters.limit}&offset=${getters.offsetFirst}`
			)
			.then((res) => {
				const pokemons = res.results.map((pokemon) => {
					const id = pokemon.url.substring(
						pokemon.url.indexOf('pokemon/') + 8,
						pokemon.url.lastIndexOf('/')
					);
					return {
						name: pokemon.name,
						id,
					};
				});
				commit('SET_POKEMONS', pokemons);
			});
	},

	prevPokemons({ state, commit, dispatch }) {
		if (state.pagination === 1) return;
		commit('SET_PAGINATION', state.pagination - 1);
		dispatch('getPokemons');
	},

	nextPokemons({ state, getters, commit, dispatch }) {
		if (state.pagination === getters.maxPagination) return;
		commit('SET_PAGINATION', state.pagination + 1);
		dispatch('getPokemons');
	},
};
