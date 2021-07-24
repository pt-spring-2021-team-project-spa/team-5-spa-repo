import planetImg from "../../assets/planetsCard.jpg";
import spaceImg from "../../assets/space.jpg";
import earthImg from "../../assets/earth.jpg";
import questionImg from "../../assets/question.jpg";
export default function Grades58() {
  return `
    <h1>Our Solar System</h1>
    <div class="cards">
    <div class="card">
    <img class="planetCardImg" src='${planetImg}'>
    <h3>Planets</h3>
    <p class="cardInfo1">Click Here!</p>
    </div>
    <div class="card">
    <img class="planetCardImg" src='${spaceImg}'>
    <h3>Space</h3>
    <p class="cardInfo2">Click Here!</p>
    </div>
    <div class="card">
    <img class="planetCardImg" src='${earthImg}'>
    <h3>Blue Marble</h3>
    <p class="cardInfo3">Click Here!</p>
    </div>
    <div class="card">
    <img class="planetCardImg" src='${questionImg}'>
    <h3>Mystery</h3>
    <p class="cardInfo4">Click Here!</p>
    </div>

    </div>
    `;
}
