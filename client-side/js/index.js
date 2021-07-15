import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Parents from './Components/Parents';
import Home from './Components/Home';
import Students from './Components/Students';
import Learning from "./Components/Learning";
import About from './Components/About';

buildPage();

function buildPage() {
  header();
  footer();
  navStudents();
  navParents();
  navLearning();
  navHome();
  navAbout();
}

function header() {
  const headerElem = document.querySelector(".header");
  headerElem.innerHTML = Header();
}

function footer() {
  const footerElem = document.querySelector(".footer");
  footerElem.innerHTML = Footer();
}

function navStudents(){
    const studentsElem = document.querySelector(".nav-list__students");
    studentsElem.addEventListener("click", () => {
        const app = document.querySelector("#app");
        app.innerHTML = Students();
      });

}

function navLearning(){
    const learningElem = document.querySelector(".nav-list__learning");
    learningElem.addEventListener("click", () => {
        const app = document.querySelector("#app");
        app.innerHTML = Learning();
      });

}

function navParents() {
  const parentsElem = document.querySelector(".nav-list__parents");
  parentsElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Parents();
  });
}

function navAbout() {
    const aboutElem = document.querySelector(".parents-about");
    aboutElem.addEventListener("click", () => {
      const app = document.querySelector("#app");
      app.innerHTML = About();
    });
  }


function navHome(){
    const homeElem = document.querySelector(".nav-list__home");
    homeElem.addEventListener("click", () => {
const app = document.querySelector('#app');
app.innerHTML = Home();
    });
}