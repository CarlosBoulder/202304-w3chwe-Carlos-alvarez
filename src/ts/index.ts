import AppComponent from "./components/AppComponent/AppComponent.js";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent.js";
import PokemonListComponent from "./components/PokemonListComponent/PokemonListComponent.js";

const appContainer = document.querySelector(".app");

if (appContainer) {
  new AppComponent(appContainer);
  new NavbarComponent(appContainer);
  new PokemonListComponent(appContainer);
}
