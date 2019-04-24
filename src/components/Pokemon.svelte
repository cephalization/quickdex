<script>
  import Search from "./Search.svelte";
  import DexEntry from "./DexEntry.svelte";
  import EmptyEntry from "./EmptyEntry.svelte";

  import { pokemon } from "../stores.js";

  let primaryPokemon;
  let previousPokemon;
  let nextPokemon;

  pokemon.subscribe(data => {
    primaryPokemon = data.primaryPokemon;
    previousPokemon = data.previousPokemon;
    nextPokemon = data.nextPokemon;
  });

  $: primaryPokemonComponent = primaryPokemon != null ? DexEntry : EmptyEntry;
  $: previousPokemonComponent = previousPokemon != null ? DexEntry : EmptyEntry;
  $: nextPokemonComponent = nextPokemon != null ? DexEntry : EmptyEntry;
</script>

<style>
	.data-container {
	  min-height: 40vh;
	}
</style>

<div class="container">
	<Search />
	<section class="section data-container">
    <div class="columns">
      <svelte:component this={previousPokemonComponent} pokemon={previousPokemon} />
      <svelte:component this={primaryPokemonComponent} isPrimary={true} pokemon={primaryPokemon} />
      <svelte:component this={nextPokemonComponent} pokemon={nextPokemon} />
    </div>
	</section>
</div>