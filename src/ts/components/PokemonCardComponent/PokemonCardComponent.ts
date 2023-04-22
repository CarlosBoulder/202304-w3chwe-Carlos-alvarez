import { type PokemonDetailStructure } from "../../types.js";
import Component from "../Component/Component.js";

class PokemonCardComponent extends Component {
  private readonly pokemon: PokemonDetailStructure;

  constructor(parentElement: Element, pokemon: PokemonDetailStructure) {
    super(parentElement, "div", "col-xl-3 col-md-6 mb-4");

    this.pokemon = pokemon;
    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
        <div class="card border-0 shadow">
          <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title mb-0">${this.pokemon.name}</h5>
          </div>
        </div>
    `;
  }
}

export default PokemonCardComponent;
