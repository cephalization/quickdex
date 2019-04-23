<script>
  import Search from "./Search.svelte";
  import { pokemon } from "../stores.js";

  let pokemonData;

  pokemon.subscribe(data => {
    pokemonData = data;
  });
</script>

<style>
	.data-container {
	  min-height: 40vh;
	}
</style>

<div class="container">
	<Search />
	<section class="section data-container">
		<!-- Display Pokémon's data if it exists -->
    {
      JSON.stringify(pokemonData)
    }
	</section>
</div>