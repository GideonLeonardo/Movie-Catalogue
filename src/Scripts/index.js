import "regenerator-runtime";
import "../Styles/style.css";
import "../Styles/responsive.css";
import App from "./Views/app";
import swRegister from "./Utils/sw-register";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
