import Component from "../Component/Component.js";

class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "appContainer");

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
      <header class="main-header">
        <img src="img/Logo-Pokemon.png" alt="pokemon logo" width="302" height="152">
      </header>
    `;
  }
}

export default AppComponent;
