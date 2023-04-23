import AppComponent from "./components/AppComponent/AppComponent.js";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent.js";
import PokemonDetailCardComponent from "./components/PokemonDetailCardComponent/PokemonDetailCardComponent.js";

const container = document.querySelector(".container");

if (container) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const url = urlParams.get("url")!;

  new AppComponent(container);
  new NavbarComponent(container);
  new PokemonDetailCardComponent(container, url);
}
