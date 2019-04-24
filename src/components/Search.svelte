<script>
  import { getPokemon } from "../getPokemon";

  let query = "";

  function onEnter(event) {
    if (event.key !== "Enter" || !query.length) return;
    getPokemon(query);
  }
</script>

<section class="section">
	<div class="control">
		<input on:keydown={onEnter} bind:value={query} class="input" type="text" placeholder="Search by name, e.g. 'Bulbasaur'">
	</div>
</section>