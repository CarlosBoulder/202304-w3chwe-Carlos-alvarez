import AppComponent from "./components/AppComponent/AppComponent.js";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent.js";

const appContainer = document.querySelector(".app");

if (appContainer) {
  new AppComponent(appContainer);
  new NavbarComponent(appContainer);
}
