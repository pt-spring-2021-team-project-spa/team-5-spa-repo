export default function Apod(apod) {
    return `
    <div class= 'apod__container'>

    <h1>NASA Astronomy Picture of the Day</h1>
    <h2> ${apod.title}</h2>
    <p>${apod.explanation}</p>
    <img src="${apod.hdurl}"/>"
    <div id="content"></div>
    </div>
    `;
}
