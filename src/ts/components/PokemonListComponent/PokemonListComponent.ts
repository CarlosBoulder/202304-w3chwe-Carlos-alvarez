import pokemons from "../../pokemons.js";
import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";

class PokemonListComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "ul", "pokemon-list row list-unstyled");

    this.renderHtml();
  }

  renderHtml(): void {
    pokemons.forEach(() => {
      new PokemonCardComponent(this.element);
    });
  }
}

export default PokemonListComponent;
