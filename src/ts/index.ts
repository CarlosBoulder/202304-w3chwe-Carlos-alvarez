import AppComponent from "./components/AppComponent/AppComponent.js";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent.js";
import PokemonListComponent from "./components/PokemonListComponent/PokemonListComponent.js";

const container = document.querySelector(".container");

if (container) {
  new AppComponent(container);
  new NavbarComponent(container);
  new PokemonListComponent(container);
}
