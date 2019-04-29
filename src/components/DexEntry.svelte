<script>
  import PokemonLink from "./PokemonLink.svelte";

  import {getPokemon} from "../getPokemon.js";
  import Type from "./Type.svelte";

  export let pokemonGroup = {};

  let id;
  let types;
  let pokemon;
  let nextPokemon;
  let previousPokemon;

  $: pokemon = pokemonGroup.primaryPokemon;
  $: nextPokemon = pokemonGroup.nextPokemon;
  $: previousPokemon = pokemonGroup.previousPokemon;
  $: types = pokemon.types.map(({type: {name}}) => name)
  $: id = pokemon.id;
</script>

<style>
  .content-text {
    margin-top: 12px
  }
  .secondary-entry {
    flex-direction: column;
  }
  .selectable {
    cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently */
  }

  .card-footer-item {
    padding: 0;
  }

  .media-left {
    margin-right: 0;
  }
</style>

<div class={`column is-half is-offset-3`}>
  <div class={`card`}>
    <div class={`card-content`}>
      <div class={`media`}>
        <div class="media-left">
          <figure class="image is-96x96">
            <img src={pokemon.sprites.front_default} alt="{pokemon.name}">
          </figure>
        </div>
        <div class="media-content content-text">
          <p class={`title is-3`}>{pokemon.name}</p>
          <p class="subtitle is-5">#{pokemon.id}</p>
        </div>
      </div>
      <div class="content">
        <div class="tags">
          {#each types as type}
            <Type {type} />
          {/each}
        </div>
      </div>
    </div>
    <footer class="card-footer">
        <span class="card-footer-item">
            <PokemonLink pokemon={previousPokemon} />
        </span>
        <span class="card-footer-item">
            <PokemonLink pokemon={nextPokemon} />
        </span>
      </footer>
  </div>
</div>