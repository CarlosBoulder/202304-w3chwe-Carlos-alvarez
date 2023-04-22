import Component from "../Component/Component.js";

class PokemonListComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "ul", "pokemonList");

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
      <ul class="pokemonList">Picachúuu!</ul>
    `;
  }
}

export default PokemonListComponent;
