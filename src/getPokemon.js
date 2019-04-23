import {pokemon} from "./stores";

export const getPokemon = async (query) => {
  if (!query.length) {
    return false
  };

  const URI = `https://pokeapi.co/api/v2/pokemon/${query}`;

  try {
    const response = await fetch(URI);

    const data = await response.json();

    pokemon.set(data);
  } catch (e) {
    return new Error(`Could not fetch pokemon! ${e}`);
  }
}