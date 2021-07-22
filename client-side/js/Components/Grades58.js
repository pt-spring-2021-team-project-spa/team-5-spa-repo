import planetImg from "../../assets/planetsCard.jpg";
export default function Grades58(){
    return `
    <div id="grades-app">
        <h1 class="grades58__welcome_title">Welcome Grades 5-8</h1>
        <p class-"grades58__welcome_text">Let's see what we can learn today!</p>
        <h2 class="nasa__cards_title">Learn About Space!</h2>
        <div class="nasa__cards">
            <div class="nasa__card">
                <img class="cardImg" src='${planetImg}'>
                <h3 class="nasa__card_title">Planets</h3>
                <p class="cardInfo">Quick Overview of planets category</p>
            </div>
            <div class="nasa__card">
                <img class="cardImg" src='${planetImg}'>
                <h3 class="nasa__card_title">Planets</h3>
                <p class="cardInfo">Quick Overview of planets category</p>
            </div>
            <div class="nasa__card">
                <img class="cardImg" src='${planetImg}'>
                <h3 class="nasa__card_title">Planets</h3>
                <p class="cardInfo">Quick Overview of planets category</p>
            </div>
            <div class="nasa__card">
                <img class="cardImg" src='${planetImg}'>
                <h3 class="nasa__card_title">Planets</h3>
                <p class="cardInfo">Quick Overview of planets category</p>
            </div>
        </div>
        <h2 class="met__cards_title">Learn About Art!</h2>
        <div class="met__cards">
            <div class="met__card">
                <img class="cardImg" src='${planetImg}'>
                <h3 class="met__card_title">Planets</h3>
                <p class="cardInfo">Quick Overview of planets category</p>
            </div>
            <div class="met__card">
                <img class="cardImg" src='${planetImg}'>
                <h3 class="met__card_title">Planets</h3>
                <p class="cardInfo">Quick Overview of planets category</p>
            </div>
            <div class="met__card">
                <img class="cardImg" src='${planetImg}'>
                <h3 class="met__card_title">Planets</h3>
                <p class="cardInfo">Quick Overview of planets category</p>
            </div>
            <div class="met__card">
                <img class="cardImg" src='${planetImg}'>
                <h3 class="met__card_title">Planets</h3>
                <p class="cardInfo">Quick Overview of planets category</p>
            </div>
        </div>
    </div>
    `;
}
