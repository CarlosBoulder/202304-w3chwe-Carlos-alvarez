import Component from "../Component/Component.js";

class NavbarComponent extends Component {
  constructor(parentElement: Element) {
    super(
      parentElement,
      "nav",
      "navbar navbar-expand-sm bg-primary navbar-dark"
    );

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="index.html">Pokemon Universe</a></li>
          <li class="nav-item"><a class="nav-link" href="#MyPokemons">My Pokemons</a></li>
        </ul>
    `;
  }
}

export default NavbarComponent;
