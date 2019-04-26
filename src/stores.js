import {writable} from 'svelte/store';

export const pokemon = writable({
  primaryPokemon: null,
  previousPokemon: null,
  nextPokemon: null,
  loading: false,
  allNames: []
});

export const error = writable(null);