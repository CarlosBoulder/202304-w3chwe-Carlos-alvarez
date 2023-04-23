import DataHandler from "../../data/DataHandler.js";
import { type Ability, type PokemonInfoStructure } from "../../types";
import Component from "../Component/Component.js";

class PokemonDetailCardComponent extends Component {
  url: string;
  pokemonDetails: PokemonInfoStructure;

  constructor(parentElement: Element, url: string) {
    super(parentElement, "div", "detail-card");
    this.url = url;

    (async () => this.getData())();
  }

  async getData(): Promise<void> {
    const dataHandler = new DataHandler(this.url);
    const pokemonDetailsResult = await dataHandler.getPokemonDetails();

    this.pokemonDetails = pokemonDetailsResult;

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
        <div class="card border-0 shadow">
          <img src="${
            this.pokemonDetails.sprites.other["official-artwork"].front_default
          }" class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title mb-0">${this.pokemonDetails.name}</h5>
            <h5 class="card-title mb-0">Abilities: ${this.getAbilities()}</h5>
            <h5 class="card-title mb-0">Base experience: ${
              this.pokemonDetails.base_experience
            }</h5>
            <h5 class="card-title mb-0">Height: ${
              this.pokemonDetails.height
            }</h5>
             <h5 class="card-title mb-0">Weight: ${
               this.pokemonDetails.weight
             }</h5>
          </div>
        </div>
    `;
  }

  getAbilities(): string {
    let abilities = "";
    this.pokemonDetails.abilities.forEach((ability: Ability) => {
      abilities += ability.name + "-";
    });
    return abilities;
  }
}

export default PokemonDetailCardComponent;
