export default function Planet(planet){
return `
<h1>${planet.name}</h1>
<p>Diameter: ${planet.diameter}</p>
<p>Distance From Sun: ${planet.distanceFromSun}</p>
<p>Average Temperature: ${planet.avgTemperature}</p>
<p>Description: ${planet.description}</p>
<p>Solar System: ${planet.solarSystem}</p>
`
}