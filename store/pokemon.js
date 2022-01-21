export const state = () => {
	return {
		id: null,
		name: null,
		cover: null,
		abilities: [],
		characteristic: null,
	};
};

export const mutations = {
	SET_ID(state, id) {
		state.id = id;
	},
	SET_NAME(state, name) {
		state.name = name;
	},
	SET_ABILITIES(state, abilities) {
		state.abilities = abilities;
	},
	SET_COVER(state, cover) {
		state.cover = cover;
	},
	SET_CHARACTERISTIC(state, characteristic) {
		state.characteristic = characteristic;
	},
};

export const actions = {
	async getPokemon({ state, commit, rootState }, id) {
		commit('SET_ID', id);

		await this.$axios
			.$get(`https://pokeapi.co/api/v2/pokemon/${id}`)
			.then(async (res) => {
				// # NAME
				const name = res.name;
				commit('SET_NAME', name);

				// # COVER
				const cover = res.sprites.front_default;
				commit('SET_COVER', cover);

				// # ABILITIES
				const abilities = [];
				for (let i = 0; i < res.abilities.length; i++) {
					const item = res.abilities[i];
					await this.$axios.$get(item.ability.url).then((res) => {
						const ability = res.names.find(
							(item) => item.language.name === rootState.lang.locale
						).name;
						abilities.push(ability);
					});
				}
				commit('SET_ABILITIES', abilities);

				// # CHARACTERISTICS
				const maxStat = res.stats.reduce((max, current) => {
					const maxState = Number(max?.base_stat);
					const currentState = Number(current.base_stat);
					if (currentState > maxState) max = current;
					return max;
				});

				await this.$axios.$get(maxStat.stat.url).then(async (res) => {
					const max = res.characteristics.length - 1;
					const random = this.$h.randomBetween(0, max);

					const url = res.characteristics[random].url;

					await this.$axios.$get(url).then((res) => {
						const characteristic = res.descriptions.find(
							(item) => item.language.name === rootState.lang.locale
						).description;
						commit('SET_CHARACTERISTIC', characteristic);
					});
				});
			});
	},
	clearPokemon({ commit }) {
		commit('SET_ID', null);
		commit('SET_NAME', null);
		commit('SET_COVER', null);
		commit('SET_ABILITIES', []);
		commit('SET_CHARACTERISTIC', null);
	},
};
