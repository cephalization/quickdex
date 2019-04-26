<script>
  /* open: {bool} Whether or not the autocomplete dropdown is open */
  export let open;

  /* items: {array: any} some elements to render within buttons  */
  export let items;

  /**
   onAutoCompleteClick - callback performed on dropdown item click

   @param e: {event} native event generated on button click in autocomplete dropdown
   @param item: {any} the item clicked on, sourced from the items array
  */
  export let onAutoCompleteClick;

  /* inputValue: {any} some renderable that represents the user's current input to the dropdown */
  export let inputValue;
</script>

<style>
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

{#if open}
  <div class="dropdown is-active">
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        {#if items.length}
        {#each items as item, i }
        <button
          type="button"
          tabindex="0"
          class={`button dropdown-item is-text is-size-5 ${!i ? "underlined" : ""}`}
          on:click="{(e) => onAutoCompleteClick(e, item)}"
          id={`${item}_button`}
        >
          {item}
          {#if i === 0}
            <span class="icon is-medium is-pulled-right">
              <i class="fas fa-angle-right"></i>
            </span>
          {/if}
        </button>
        {/each}
        {:else}
        <p class="dropdown-item">{inputValue} not found</p>
        {/if}
      </div>
    </div>
  </div>
{/if}