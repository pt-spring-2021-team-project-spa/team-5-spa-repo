export default function PlanetInfo(planetInfo) {
  return `
    <h1>Our Solar System Is Amazing! Take a Peak!</h1>
    ${planetInfo
      .map((planet) => {
        return `
        <p>Planet: ${planet.name}</p>
        <p>Diameter: ${planet.diameter}</p>
        <p>Distance From Sun: ${planet.distanceFromSun}</p>
        <p>Average Temperature: ${planet.avgTemperature}</p>
        <p>Description: ${planet.description}</p>
        <p>Solar System: ${planet.solarSystem}</p>
        `;
      })
      .join("")}
    
    `;
}