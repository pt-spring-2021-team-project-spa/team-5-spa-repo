"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Planets;
function Planets(planets) {
  return ("\n    <h1>The Planets In Our Solar System</h1>\n    <ul>\n    ").concat(planets.results.map(function (planet) {
    return ("\n        <li class='planet-info'>\n        <h3 class='planet-name'>").concat(planet.name, "</h3>\n        <p>Diameter: ").concat(planet.diameter, "</p>\n        <p>Distance From Sun: ").concat(planet.distanceFromSun, "</p>\n        <p>Average Temperature: ").concat(planet.avgTemperature, "</p>\n        <p>Description: ").concat(planet.descripton, "</p>\n        <input type='hidden' id='planetId' value='").concat(planet.id, "'>\n        </li>\n        ");
  }).join(""), "\n    </ul>\n    ");
}
