import DataHandler from "../../data/DataHandler.js";
import {
  type PokemonInfoStructure,
  type PokemonDetailStructure,
} from "../../types.js";
import Component from "../Component/Component.js";

class PokemonCardComponent extends Component {
  private readonly pokemon: PokemonDetailStructure;
  private pokemonImage: PokemonInfoStructure;

  constructor(parentElement: Element, pokemon: PokemonDetailStructure) {
    super(parentElement, "div", "col-xl-3 col-md-6 mb-4");

    this.pokemon = pokemon;

    (async () => this.getData())();
  }

  async getData(): Promise<void> {
    const dataHandler = new DataHandler(this.pokemon.url);
    const pokemonDetailsResult = await dataHandler.getPokemonDetails();

    this.pokemonImage = pokemonDetailsResult;

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
        <div class="card border-0 shadow">
        <a href="/pokemondetails?url=${this.pokemon.url}"> 
        <img src="${this.pokemonImage.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title mb-0">${this.pokemon.name}</h5>
            </a> 
          </div>
        </div>
    `;
  }
}

export default PokemonCardComponent;
