import Component from "../Component/Component.js";

class PokemonCardComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "li", "pokemon col");

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
    <div class="card pokemon__card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="" class="pokemon__image card-img-top" />
        <div class="card-body">
          <h2 class="pokemon__name card-title h4">spearow</h2>
        </div>
    </div> 
    `;
  }
}

export default PokemonCardComponent;
