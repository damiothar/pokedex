# Pokedex

The 151 original Pokémon, browsed five at a time inside a mockup of the actual red device. Everything comes from PokéAPI at runtime: the list, the sprite, the abilities and a characteristic picked at random among the descriptions tied to that Pokémon's highest base stat, so the same entry reads a little differently on each visit. Nuxt generates the whole thing as a static site with no server behind it, Vuex holds the pagination and the current Pokémon, and the 8-bit look is NES.css over Press Start 2P. The language toggle swaps the interface strings and also the language the abilities and the characteristic are requested in, so what the API sends back is translated too.

Live at [damiothar.github.io/pokedex](https://damiothar.github.io/pokedex/)
