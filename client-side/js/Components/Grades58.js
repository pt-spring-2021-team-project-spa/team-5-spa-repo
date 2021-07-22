import planetImg from "../../assets/planetsCard.jpg";
export default function Grades58(){
    return `
    <h1 class="title">Grades 5-8</h1>
    <div class="cards">
    <div class="planetCard">
    <img class="planetCardImg" src='${planetImg}'>
    <h3>Planets</h3>
    <p class="cardInfo">Quick Overview of planets category</p>
    </div>

    <div class="spaceCard">
    <img class="planetCardImg" src='${planetImg}'>
    <h3>Space</h3>
    <p class="cardInfo">Quick Overview of planets category</p>
    </div>

    <div class="artCard">
    <img class="planetCardImg" src='${planetImg}'>
    <h3>Art</h3>
    <p class="cardInfo">Quick Overview of planets category</p>
    </div>

    <div class="mysteryCard">
    <img class="planetCardImg" src='${planetImg}'>
    <h3>Mystery</h3>
    <p class="cardInfo">Quick Overview of planets category</p>
    </div>

    </div>
    `;
}