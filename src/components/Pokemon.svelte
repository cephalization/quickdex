<script>
  import Search from "./Search.svelte";
  import DexEntry from "./DexEntry.svelte";
  import EmptyEntry from "./EmptyEntry.svelte";

  import { pokemon } from "../stores.js";

  let pokemonGroup;

  pokemon.subscribe(data => {
    pokemonGroup = data;
  });

  $: primaryPokemonComponent = pokemonGroup.primaryPokemon != null ? DexEntry : EmptyEntry;
</script>

<style>
	.data-container {
	  min-height: 40vh;
	}

  .container {
    background-color: white;
  }
</style>

<div class="container">
	<Search />
	<section class="section data-container">
    <div class="columns">
      <svelte:component this={primaryPokemonComponent} isPrimary={true} {pokemonGroup} />
    </div>
	</section>
</div>