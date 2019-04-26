import 'bulma/css/bulma.css'
import App from './App.svelte';
import {getPokemon} from "./getPokemon.js";

const app = new App({
	target: document.body,
});

window.app = app;

getPokemon(1);

export default app;