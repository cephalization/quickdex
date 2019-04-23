<script>
  import Type from "./Type.svelte";

  export let pokemon;
  $: types = pokemon.types.map(({type: {name}}) => name)
</script>

<style>
  .content-text {
    margin-top: 12px
  }
</style>

<div class="columns">
  <div class="card column is-half is-offset-3">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-96x96">
            <img src={pokemon.sprites.front_default} alt="{pokemon.name}">
          </figure>
        </div>
        <div class="media-content content-text">
          <p class="title is-3">{pokemon.name}</p>
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
</div>