<script>
  import {getPokemon} from "../getPokemon";

  export let pokemon = null;

  function get() {
    getPokemon(pokemon.id);
  }
</script>

<style>
  button {
    height: 100%;
    width: 100%;
    padding: 0.75em;
  }
</style>

{#if pokemon != null}
  <button class="button is-text" on:click={get}>
    {`#${pokemon.id} ${pokemon.name}`}
    <figure class="image is-32x32 is-pulled-left">
        <img src={pokemon.sprites.front_default} alt={pokemon.name}>
    </figure>
  </button>
{:else}
  <button class="button is-text" disabled>No pokemon</button>
{/if}