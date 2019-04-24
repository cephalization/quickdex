import {pokemon} from "./stores";

const pokemonQuery = query => `https://pokeapi.co/api/v2/pokemon/${query}`;

export const getPokemon = async (query) => {
  try {
    const response = await fetch(pokemonQuery(query));
    const primaryPokemon = await response.json();

    const index = primaryPokemon.id;

    let previousPokemon = null;
    let nextPokemon = null;

    if (index > 1) {
      const prevResponse = await fetch(pokemonQuery(index - 1));
      previousPokemon = await prevResponse.json();
    }

    if (index < 807) {
      const nextResponse = await fetch(pokemonQuery(index + 1));
      nextPokemon = await nextResponse.json();
    }

    pokemon.set({primaryPokemon, previousPokemon, nextPokemon});
  } catch (e) {
    console.error(new Error(`Could not fetch pokemon! ${e}`));
  }
}