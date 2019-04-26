<script>
	import Error from "./Error.svelte";

  import { pokemonNames } from "../STATIC.pokemon.js";
  import { getPokemon } from "../getPokemon";
  import { pokemon } from "../stores";

  let names = [];
  let query = "";
  let focused = false;
  let dropdownOpen = false;

  function search(autocompleted = false) {
    if (!query.length || !names.length) return;

    if (autocompleted === false && names.length >= 1) query = names[0];

    document.body.removeEventListener("click", closeDropdown);
    focused = false;
    getPokemon(query);
  }

  function onEnter(event) {
    if (event.key !== "Enter") return;
    event.target.blur();
    search();
  }

  function onAutoCompleteClick(e, pokemon) {
    e.stopPropagation();
    query = pokemon;
    search(true);
  }

  function openDropdown(e) {
    e.stopPropagation();
    focused = true;
    document.body.addEventListener("click", closeDropdown);
  }

  function closeDropdown(e) {
    focused = false;
  }

  let loading = false;
  pokemon.subscribe(data => {
    loading = data.loading;
  })

  $: names = query.length && pokemonNames.filter(name => name.startsWith(query.toLowerCase()))
  $: dropdownOpen = focused && query.length;
</script>

<style>
  section {
    padding: 3rem 1.5rem 0 1.5rem;
  }

  .dropdown {
    top: 90px;
    margin: 0;
    position: absolute;
  }

  .dropdown div {
    max-height: 165px;
  }

  .dropdown-content {
    overflow-y: auto;
  }

  .button {
    padding-right: 1rem;
    text-decoration: none;
  }

  .underlined {
    text-decoration: underline;
  }
</style>

<section class="section">
	<div class="columns is-multiline">
    <div class="column is-6 is-offset-3">
      <div class="field has-addons">
         <div class="control is-expanded">
           <input
            tabindex="0"
            disabled={loading}
            on:click={(e) => {e.stopPropagation()}}
            on:focus={openDropdown}
            on:keydown={onEnter}
            bind:value={query}
            class="input"
            type="text"
            placeholder="Type, search to autocomplete"
          >
         </div>
         <div class="control">
           <button disabled={!query.length || !names.length || loading} class={`button is-info ${loading ? "is-loading" : ""}`} type="button" on:click={() => search(false)}>Search</button>
         </div>
       </div>
       <Error />
    </div>
    <div class="column is-offset-3 is-6">
        {#if dropdownOpen}
        <div class="dropdown is-active">
         <div class="dropdown-menu" id="dropdown-menu" role="menu">
           <div class="dropdown-content">
             {#if names.length}
             {#each names as name, i }
              <button
                type="button"
                tabindex="0"
                class={`button dropdown-item is-text is-size-5 ${!i ? "underlined" : ""}`}
                on:click={(e) => onAutoCompleteClick(e, name)}
                id={`${name}_button`}
              >
                {name}
                {#if i === 0}
                  <span class="icon is-medium is-pulled-right">
                    <i class="fas fa-angle-right"></i>
                  </span>
                {/if}
              </button>
             {/each}
             {:else}
              <p class="dropdown-item">{query} not found</p>
             {/if}
           </div>
         </div>
        </div>
        {/if}
    </div>
  </div>
</section>