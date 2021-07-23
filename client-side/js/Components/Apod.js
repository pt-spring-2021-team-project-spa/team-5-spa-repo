export default function Apod(apod) {
    return `
    <div class= 'apod__container'>

    <h1>NASA Astronomy Picture of the Day</h1>
    <h2> ${apod.title}</h2>
        <img src="${apod.hdurl}"/>
        <p>${apod.explanation}</p>

    <div id="content"></div>
    </div>
    `;
}
