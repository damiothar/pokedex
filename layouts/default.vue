<template>
	<div id="app">
		<div class="pokedex">
			<div class="pokedex__inner">
				<nav class="nav">
					<NuxtLink :to="localePath('/')">
						<i class="nes-pokeball"></i>
					</NuxtLink>
					<div class="nav__lang">
						<span></span>
						<a
							v-for="(locale, localeIndex) in locales"
							:key="`locale${localeIndex}`"
							:href="switchLocalePath(locale.code)"
							class="nav__button"
							:class="{'--active': locale.code == currentLocale}"
							btp-cursor="pointer"
						>
							<input 
								class="nes-radio"
								type="radio"
								disabled
								:checked="locale.code == currentLocale ? true : false"
							></input>
							<span>{{ locale.shortname }}</span>
						</a>
					</div>
				</nav>
				<Nuxt />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		locales() {
			return this.$i18n.locales;
		},
		currentLocale() {
			return this.$i18n.locale;
		},
	},
};
</script>

<style lang="scss" scoped>
#app {
	width: 100vw;
	height: 100vh;
	background-color: $black;
	display: flex;
	justify-content: center;
	align-items: center;
}
.pokedex {
	width: 75rem;
	height: 70rem;
	position: relative;
	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		background-color: $red;
	}
	&::before {
		top: -0.75rem;
		bottom: -0.75rem;
	}
	&::after {
		left: -0.75rem;
		right: -0.75rem;
	}
	&__inner {
		position: relative;
		z-index: 2;
		width: 100%;
		height: 100%;
		padding: 5rem;
		background-color: $white;
		border-bottom: 0.75rem solid $gray;
		border-right: 0.75rem solid $gray;
		display: flex;
		flex-direction: column;
	}
}
.nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 4rem;
	&__lang {
	}
	&__button {
		color: $gray;
		&.--active {
			color: $black;
			pointer-events: none;
		}
	}
}
</style>
