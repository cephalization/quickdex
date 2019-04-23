<script>
  import Search from "./Search.svelte";
  import DexEntry from "./DexEntry.svelte";
  import EmptyEntry from "./EmptyEntry.svelte";

  import { pokemon } from "../stores.js";

  let pokemonData;

  pokemon.subscribe(data => {
    pokemonData = data;
    console.log(data);
  });
  $: component = pokemonData !== null ? DexEntry : EmptyEntry;
</script>

<style>
	.data-container {
	  min-height: 40vh;
	}
</style>

<div class="container">
	<Search />
	<section class="section data-container">
    <svelte:component this={component} pokemon={pokemonData} />
	</section>
</div>