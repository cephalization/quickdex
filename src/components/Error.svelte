<script>
  import {error} from "../stores";
	import { fade } from 'svelte/transition';

  let msg = null;
  let status = "out";

  error.subscribe(data => {
    msg = data;
  })

  function clear() {
    error.set(null);
  }
</script>

<style>
  .placeholder {
    height: 1rem;
    margin-top: 0.9rem;
    display: block;
  }
</style>

{#if msg}
<p
  class="help is-danger"
  transition:fade
  on:introstart="{() => status = `in`}"
  on:outroend="{() => status = `out`}"
>{msg}</p>
{:else if status === "out"}
<p class="placeholder" />
{/if}