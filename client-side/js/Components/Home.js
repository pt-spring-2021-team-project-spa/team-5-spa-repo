import planetImg from "../../assets/planetsCard.jpg";
function Home() {
  return `
    <h1>Home Page Test</h1>
    <div class="cards">
    <div class="card">
    <img class="planetCardImg" src='${planetImg}'>
    <h3>Planets</h3>
    <p class="cardInfo">Quick Overview of planets category</p>
    </div>
    <div class="card">
    <img class="planetCardImg" src='${planetImg}'>
    <h3>Planets</h3>
    <p class="cardInfo">Quick Overview of planets category</p>
    </div>
    <div class="card">
    <img class="planetCardImg" src='${planetImg}'>
    <h3>Planets</h3>
    <p class="cardInfo">Quick Overview of planets category</p>
    </div>
    <div class="card">
    <img class="planetCardImg" src='${planetImg}'>
    <h3>Planets</h3>
    <p class="cardInfo">Quick Overview of planets category</p>
    </div>

    </div>
    `;
}
export default {
  Home,
};
