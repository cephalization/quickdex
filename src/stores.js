import {writable} from 'svelte/store';

export const pokemon = writable({
  primaryPokemon: null,
  previousPokemon: null,
  nextPokemon: null
});