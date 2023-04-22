import Component from "../Component/Component.js";

class NavbarComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "nav", "navbar");

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
      <nav class="navbar">
        <ul>
          <li><a href="#PokemonUniverse">Pokemon Universe</a></li>
          <li><a href="#MyPokemons">My Pokemons</a></li>
        </ul>
      </nav>
    `;
  }
}

export default NavbarComponent;
