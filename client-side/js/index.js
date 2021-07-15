import Header from "./components/Header";
import Footer from "./components/Footer";
import Planet from "./components/Planet";
import Planets from "./components/Planets";
import apiActions from "./api-actions/api";

buildPage();

function buildPage() {
  header();
  footer();
  navPlanets();
}

function header() {
  const headerElem = document.querySelector(".header");
  headerElem.innerHTML = Header();
}
function footer() {
  const footerElem = document.querySelector(".footer");
  footerElem.innerHTML = Footer();
}
function navPlanets() {
  const planetsLi = document.querySelector(".nav_menu_planets");
  planetsLi.addEventListener("click", () => {
    const app = document.querySelector("#app");
    apiActions.getRequest("http://localhost:8080/api/planets");
  });
}

const students = document.querySelector(".students");
students.addEventListener("click", () => {
  fetch("http://localhost:8080/api/planets")
    .then((response) => response.json())
    .then((jsonData) => console.log(jsonData))
    .catch((err) => console.log(err));
});

function renderPlanetInfo() {
  const app = document.querySelector("#app");
  app.addEventListener("click", () => {
    if (event.target.classList.contains("planet-name")) {
      const planetUrl =
        event.target.parentElement.querySelector("#planetId").value;
      apiActions.getRequest(planetUrl, (planet) => {
        app.innerHTML = Planet(planet);
      });
    }
  });
}
