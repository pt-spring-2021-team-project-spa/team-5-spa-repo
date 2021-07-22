import Home from "./Home";
export default function Planets(planets) {
  return `
      <h1>Our Solar System Is Amazing! Take a Peak!</h1>
      <ul>
      ${planets.map((planet) => {
        return `
          <li class="planet-info">
          <img class='planet-img' src='${planet.imageUrl}'>
          <h3 class="planet-name">Planet: ${planet.name}</h3>
          <h4 class="planet-size">Diameter: ${planet.diameter}</h4>
          <p class="planet-distance">Distance From Sun: ${planet.distanceFromSun}</p>
          <p class="planet-temp">Average Temperature: ${planet.temperature}</p>
          <p class="planet-description">Description: ${planet.description}</p>
          <input type="button" id='planetId' value='${planet.url}'>
          </li>
          `;
      })}
      </ul>
      
      `;
}
