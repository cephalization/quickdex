<script>
	import Error from "./Error.svelte";

  import { getPokemon } from "../getPokemon";
  import { pokemon } from "../stores";

  let query = "";

  function search() {
    if (!query.length) return;
    getPokemon(query);
  }

  function onEnter(event) {
    if (event.key !== "Enter") return;
    search();
  }

  let loading = false;
  pokemon.subscribe(data => {
    loading = data.loading;
  })
</script>

<style>
  section {
    padding: 3rem 1.5rem 0 1.5rem;
  }
</style>

<section class="section">
	<div class="columns">
    <div class="column is-6 is-offset-3">
      <div class="field has-addons">
         <div class="control is-expanded">
           <input disabled={loading} on:keydown={onEnter} bind:value={query} class="input" type="text" placeholder="Search by name, e.g. 'Bulbasaur'">
         </div>
         <div class="control">
           <button disabled={!query.length || loading} class={`button is-info ${loading ? "is-loading" : ""}`} type="button" on:click={search}>Search</button>
         </div>
       </div>
       <Error />
    </div>
  </div>
</section>