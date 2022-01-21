<template>
	<div class="page">
		<main class="page__main">
			<h1 class="title">{{ t[locale].home.title }}</h1>
			<ul class="pokemons">
				<li
					v-for="pokemon in pokemons"
					:key="pokemon.name"
					class="pokemons__item"
				>
					<strong>{{ pokemon.id | formatId }}.</strong>
					<NuxtLink class="pokemons__link" :to="`/pokemon/${pokemon.id}`">
						{{ pokemon.name }}
					</NuxtLink>
				</li>
			</ul>
		</main>

		<aside class="pagination">
			<button
				class="pagination__button nes-btn"
				type="button"
				:class="{ 'is-disabled': pagination === 1 }"
				@click.prevent="prevPokemons"
			>
				{{ t[locale].general.prev }}
			</button>
			<div class="pagination__number">
				{{ pagination | formatPagination }} /
				{{ maxPagination | formatPagination }}
			</div>
			<button
				class="pagination__button nes-btn"
				type="button"
				:class="{ 'is-disabled': pagination === maxPagination }"
				@click.prevent="nextPokemons"
			>
				{{ t[locale].general.next }}
			</button>
		</aside>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		...mapState('lang', ['locale', 't']),
		...mapState('home', ['pokemons', 'pagination']),
		...mapGetters('home', ['maxPagination']),
	},
	created() {
		this.getPokemons();
	},
	methods: {
		...mapActions('home', ['getPokemons', 'prevPokemons', 'nextPokemons']),
	},
};
</script>

<style lang="scss" scoped>
.pokemons {
	margin-left: 2rem;
	&__item {
		margin-bottom: 1rem;
		font-size: 2.5rem;
	}
	&__link {
		margin-left: -2rem;
	}
}

.pagination {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 3rem;
	&__number {
		flex: 1;
		text-align: center;
		font-size: 2.5rem;
		margin: 0 1rem;
	}
}
</style>
