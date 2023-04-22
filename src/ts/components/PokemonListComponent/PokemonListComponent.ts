import Component from "../Component/Component";

class PokemonListComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "ul", "pokemonList");

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
      
    `;
  }
}

export default PokemonListComponent;
