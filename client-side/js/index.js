import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Parents from "./Components/Parents";
import Planets from "./Components/Planets";
import Home from "./Components/Home";
import Students from "./Components/Students";
import Learning from "./Components/Learning";
import About from "./Components/About";
import Grades14 from "./Components/Grades14";
import crud from "./crud/crud";
import StudentInfo from "./rendering/studentInfo";
import ParentInfo from "./rendering/parentInfo";
import PlanetInfo from "./rendering/planetInfo";
import AddStudent from "./Components/AddStudent";
import Grades58 from "./Components/Grades58";
import cards from "./arrays/mystery_array_grade58";

buildPage();

function buildPage() {
  header();
  footer();
  navStudents();
  navParents();
  navHome();
  navGrades58();
  navGrades14();
  navAbout();
  navStart();
}

function header() {
  const headerElem = document.querySelector(".header");
  headerElem.innerHTML = Header();
}

function footer() {
  const footerElem = document.querySelector(".footer");
  footerElem.innerHTML = Footer();
}

function navGrades58() {
  const grades58Elem = document.querySelector(".nav-list__grades58");
  grades58Elem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Grades58();
  });
  showCard1();
}
function showCard1() {
  const app = document.querySelector("#app");
  app.addEventListener("click", () => {
    if (event.target.classList.contains("cardInfo1")) {
      const card = document.createElement("div");
      card.setAttribute("class", "mystery-card");
      crud.getRequest("http://localhost:8080/api/planets", (planets) => {
        card.innerHTML = Planets(planets);
      });
      app.appendChild(card);
      hideCards();
    }
    const cards = document.querySelector(".cards");
    if ((cards.style.display = "none")) {
      showCard2();
    }
  });
  renderPlanetInfo();
}
function showCard2() {
  const app = document.querySelector("#app");
  app.addEventListener("click", () => {
    if (event.target.classList.contains("cardInfo2")) {
      const card = document.createElement("div");
      card.setAttribute("class", "mystery-card2");
      crud.getRequest("http://localhost:8080/api/planets", (planets) => {
        card.innerHTML = Planets(planets);
      });
      app.appendChild(card);
      hideCards();
    }
    const cards = document.querySelector(".cards");
    if ((cards.style.display = "none")) {
      showCard3();
    }
  });
  renderPlanetInfo();
}
function showCard3() {
  const app = document.querySelector("#app");
  app.addEventListener("click", () => {
    if (event.target.classList.contains("cardInfo3")) {
      const card = document.createElement("div");
      card.setAttribute("class", "mystery-card3");
      crud.getRequest("http://localhost:8080/api/planets", (planets) => {
        card.innerHTML = Planets(planets);
      });
      app.appendChild(card);
      hideCards();
    }
    const cards = document.querySelector(".cards");
    if ((cards.style.display = "none")) {
      showCard4();
    }
  });
  renderPlanetInfo();
}
function showCard4() {
  const app = document.querySelector("#app");
  app.addEventListener("click", () => {
    if (event.target.classList.contains("cardInfo4")) {
      const card = document.createElement("div");
      card.setAttribute("class", "mystery-card4");
      crud.getRequest("http://localhost:8080/api/planets", (planets) => {
        card.innerHTML = Planets(planets);
      });
      app.appendChild(card);
      hideCards();
    }
  });
  renderPlanetInfo();
}
function hideCards() {
  const cards = document.querySelector(".cards");
  cards.style.display = "none";
}

function navGrades14() {
  const gradesElem = document.querySelector(".nav-list__grades14");
  gradesElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Grades14();
  });
}

function navHome() {
  const homeElem = document.querySelector(".nav-list__home");
  homeElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Home();
  });
}

function navStudents() {
  const studentsElem = document.querySelector(".header__parents_students");
  studentsElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    crud.getRequest("http://localhost:8080/api/students", (students) => {
      app.innerHTML = Students(students);
    });
    renderStudentInfo();
  });
}

function renderStudentInfo() {
  const app = document.querySelector("#app");
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains(".student-name")) {
      const studentId =
        event.target.parentElem.querySelector("#studentId").value;
      crud.getRequest(studentId, (student) => {
        app.innerHTML = StudentInfo(student);
      });
    }
  });
}

function navStart() {
  const welcomeElem = document.querySelector(".nav-list__welcome__center");
  welcomeElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    crud.getRequest("http://localhost:8080/api/students", (students) => {
      app.innerHTML = AddStudent(students);
    });
  });
}

function navLearning() {
  const learningElem = document.querySelector(".nav-list__learning");
  learningElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    crud.getRequest("http://localhost:8080/api/planets", (planets) => {
      app.innerHTML = Planets(planets);
    });
    renderPlanetInfo();
  });
}
function renderPlanetInfo() {
  const app = document.querySelector("#app");
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains(".planet-info")) {
      const planetId = event.target.parentElem.querySelector("#planetId").value;
      crud.getRequest(planetId, (planet) => {
        app.innerHTML = PlanetInfo(planet);
      });
    }
  });
}

function navParents() {
  const parentsElem = document.querySelector(".header__parents_portal");
  parentsElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    crud.getRequest("http://localhost:8080/api/parents", (parents) => {
      app.innerHTML = Parents(parents);
    });
    renderParentInfo();
  });
}

function renderParentInfo() {
  const app = document.querySelector("#app");
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("parent-name")) {
      const parentId = event.target.parentElem.querySelector("#parentId").value;
      crud.getRequest(parentId, (parent) => {
        app.innerHTML = ParentInfo(parent);
      });
    }
  });
}

function navAbout() {
  const aboutElem = document.querySelector(".parents-about");
  aboutElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = About();
  });
}
