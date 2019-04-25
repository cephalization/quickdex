<script>
  import { getPokemon } from "../getPokemon";

  let query = "";

  function search() {
    if (!query.length) return;
    getPokemon(query);
  }

  function onEnter(event) {
    if (event.key !== "Enter") return;
    search();
  }
</script>

<style>
  section {
    padding: 3rem 1.5rem 0 1.5rem;
  }
</style>

<section class="section">
	<div class="columns">
    <div class="field has-addons column is-6 is-offset-3">
       <div class="control is-expanded">
         <input on:keydown={onEnter} bind:value={query} class="input" type="text" placeholder="Search by name, e.g. 'Bulbasaur'">
       </div>
       <div class="control">
         <button disabled={!query.length} class="button is-info" type="button" on:click={search}>Search</button>
       </div>
     </div>
  </div>
</section>