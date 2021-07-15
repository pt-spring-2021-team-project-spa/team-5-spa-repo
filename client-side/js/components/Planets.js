export default function Planets(planets){
    return `
    <h1>The Planets In Our Solar System</h1>
    <ul>
    ${planets.results
    .map(planet =>{
        return `
        <li class='planet-info'>
        <h3 class='planet-name'>${planet.name}</h3>
        <p>Diameter: ${planet.diameter}</p>
        <p>Distance From Sun: ${planet.distanceFromSun}</p>
        <p>Average Temperature: ${planet.avgTemperature}</p>
        <input type='hidden' id='planetId' value='${planet.url}'>
        </li>
        `;
    })
    .join('')}
    </ul>
    `;
}