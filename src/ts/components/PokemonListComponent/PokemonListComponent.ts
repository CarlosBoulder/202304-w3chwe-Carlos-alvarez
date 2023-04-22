import {
  type PokemonsDataStructure,
  type PokemonDetailStructure,
} from "../../types.js";
import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

class PokemonListComponent extends Component {
  private pokemons: PokemonDetailStructure[] = [];

  constructor(parentElement: Element) {
    super(parentElement, "div", "row");

    (async () => this.getPokemon())();
  }

  async getPokemon(): Promise<void> {
    const response = await fetch(apiUrl);
    const pokemonDataResult = (await response.json()) as PokemonsDataStructure;
    this.pokemons = pokemonDataResult.results;
    this.renderHtml();
  }

  renderHtml(): void {
    this.pokemons.forEach((pokemon: PokemonDetailStructure) => {
      new PokemonCardComponent(this.element, pokemon);
    });
  }
}

export default PokemonListComponent;
