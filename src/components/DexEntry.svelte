<script>
  import {getPokemon} from "../getPokemon.js";
  import Type from "./Type.svelte";

  export let isPrimary = false;
  export let pokemon;
  let id;
  let types;
  let hover = false;
  $: types = pokemon.types.map(({type: {name}}) => name)
  $: id = pokemon.id;

  function loadData() {
    if (!isPrimary) {
      getPokemon(id);
    }
  }

  function mouseIn() {
    if (!isPrimary) {
      hover = true;
    }
  }

  function mouseOut() {
    hover = false;
  }
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
</style>

<div on:click={loadData} on:mouseover={mouseIn} on:mouseout={mouseOut} class={`card column ${isPrimary ? "is-half" : "is-3 selectable"}  ${hover ? "has-background-grey-lighter" : ""}`}>
  <div class={`card-content`}>
    <div class={`media ${!isPrimary ? "secondary-entry" : ""}`}>
      <div class="media-left">
        <figure class="image is-96x96">
          <img src={pokemon.sprites.front_default} alt="{pokemon.name}">
        </figure>
      </div>
      <div class="media-content content-text">
        <p class={`title ${!isPrimary ? "is-5" : "is-3"}`}>{pokemon.name}</p>
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
</div>