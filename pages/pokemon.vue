<template>
	<div class="page">
		<main class="page__main">
			<h1 class="title">{{ id | formatId }}.{{ name }}</h1>

			<div class="details">
				<!-- COVER -->
				<div class="details__cover">
					<div class="cover">
						<img class="cover__image" :src="cover" :alt="name" />
					</div>
				</div>

				<!-- DATA -->
				<div class="details__data">
					<h2 class="subtitle">{{ $t('pokemon.characteristic') }}</h2>
					<p class="text">{{ characteristic }}</p>

					<h2 class="subtitle">{{ $t('pokemon.abilities') }}</h2>
					<ul class="list --mb0 nes-list is-disc">
						<li v-for="ability in abilities" :key="ability" class="list__item">
							<span class="is-dark">{{ ability }}</span>
						</li>
					</ul>
				</div>
			</div>
		</main>

		<aside class="back">
			<NuxtLink class="nes-btn" :to="localePath('/')">
				{{ $t('general.back') }}
			</NuxtLink>
		</aside>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	async asyncData({ params, store }) {
		await store.dispatch('pokemon/getPokemon', params.id);
	},
	computed: {
		...mapState('pokemon', [
			'id',
			'name',
			'cover',
			'characteristic',
			'abilities',
		]),
	},
};
</script>

<style lang="scss" scoped>
.details {
	display: flex;
	align-items: center;
	&__data {
		flex: 1;
		padding-left: 4rem;
	}
}
.cover {
	position: relative;
	display: inline-block;
	margin: 0.75rem;
	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		background-color: $black;
	}
	&::before {
		top: -0.75rem;
		bottom: -0.75rem;
	}
	&::after {
		left: -0.75rem;
		right: -0.75rem;
	}
	&__image {
		position: relative;
		z-index: 2;
		background-color: $gray;
		width: 22rem;
		height: 22rem;
		object-fit: contain;
	}
}
</style>
