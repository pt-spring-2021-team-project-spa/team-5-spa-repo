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
import Games from "./Components/Games";
import Contact from "./Components/Contact";
import Faq from "./Components/Faq";
import Terms from "./Components/Terms";
import Privacy from "./Components/Privacy";
import Space from "./Components/Space";
import Art from "./Components/Art";
import Mystery from "./Components/Mystery";
import Apod from "./Components/Apod";
import apiActions from "./api-actions/api.js";
import Epic from "./Components/Epic";
import FemaleArt from "./Components/FemaleArt";
import api from "./api-actions/api.js";
import { func } from "assert-plus";

buildPage();

function buildPage() {
  header();
  footer();
  navStudents();
  navParents();
  navHome();
  navGrades58();
  navGrades14();
  navGames();
  footerFaq();
  footerAbout();
  footerContact();
  footerTerms();
  navAbout();
  navContact();
  navFaq();
  navTerms();
  navPrivacy();
  navStart();
  gradeSelect();
}

function header() {
  const headerElem = document.querySelector(".header");
  headerElem.innerHTML = Header();
}

function footer() {
  const footerElem = document.querySelector(".footer");
  footerElem.innerHTML = Footer();
}

function gradeSelect() {
  const gradeElem = document.querySelector(".grades58Button");
  gradeElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Grades58();
  });
}

function navGrades58() {
  const grades58Elem = document.querySelector(".nav-list__grades58");
  grades58Elem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Grades58();
  });
  showCard1();
  showCard2();
  showCard3();
  showCard4();
}
// function Apod() {
//   apodElem.addEventListener("click", () => {
//     const app = document.querySelector("#app");
//     apiActions.getRequest(
//       "https://api.nasa.gov/planetary/apod?api_key=oUr2pzLOuwjgmfRew8Jna0IkUEJou0Zt30a5jIeX",
//       (apod) => {
//         console.log(apod);
//         app.innerHTML = Apod(apod);
//       }
//     );
//   });
// }
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
  });
  renderPlanetInfo();
}
function showCard2() {
  const app = document.querySelector("#app");
  app.addEventListener("click", () => {
    if (event.target.classList.contains("cardInfo2")) {
      const card = document.createElement("div");
      card.setAttribute("class", "mystery-card2");
      apiActions.getRequest(
        "https://api.nasa.gov/planetary/apod?api_key=oUr2pzLOuwjgmfRew8Jna0IkUEJou0Zt30a5jIeX",
        (apod) => {
          console.log(apod);
          card.innerHTML = Apod(apod);
        }
      );
      app.appendChild(card);
      hideCards();
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
      api.getRequest(
        "https://api.nasa.gov/EPIC/api/natural?api_key=oUr2pzLOuwjgmfRew8Jna0IkUEJou0Zt30a5jIeX",
        (epic) => {
          console.log(epic);
          card.innerHTML = Epic(epic);
        }
      );
      app.appendChild(card);
      hideCards();
    }
  });
}
function showCard4() {
  const app = document.querySelector("#app");
  app.addEventListener("click", () => {
    if (event.target.classList.contains("cardInfo4")) {
      const card = document.createElement("div");
      card.setAttribute("class", "mystery-card4");
      const getWomanUrl =
        "https://collectionapi.metmuseum.org/public/collection/v1/search?q=planet";
      const apiLink =
        "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

      fetch(`${getWomanUrl}`)
        .then((response) => response.json())
        .then((data) => {
          return data;
        })
        .then((data) => {
          let objectIDs = data.objectIDs;
          let objectID =
            objectIDs[Math.floor(Math.random() * objectIDs.length)]; // Select a random Id
          console.log(objectID);

          fetch(`${apiLink}` + objectID)
            .then((resp) => resp.json())
            .then((data) => {
              console.log(data);
              app.innerHTML = FemaleArt(data);

              let title = document.querySelector(".title");
              title.innerHTML = `${data.title} `;

              let department = document.querySelector(".department");
              department.innerHTML = `Department: ${data.department} `;

              if (`${data.culture}` === "") {
              } else {
                let culture = document.querySelector(".culture");
                culture.innerHTML = `Culture: ${data.culture} `;
              }

              if (`${data.period}` === "") {
              } else {
                let period = document.querySelector(".period");
                period.innerHTML = `Period: ${data.period}`;
              }

              let objectEndDate = document.querySelector(".objectEndDate");
              objectEndDate.innerHTML = `Date: ${data.objectEndDate} `;

              let primaryImage = document.querySelector(".photo");
              primaryImage.innerHTML = `<img src="${data.primaryImage}" class="primaryImage" > `;

              let artistDisplayName =
                document.querySelector(".artistDisplayName");
              artistDisplayName.innerHTML = `${data.artistDisplayName} `;

              let artistNationality =
                document.querySelector(".artistNationality");
              artistNationality.innerHTML = `${data.artistNationality} `;

              let artistDisplayBio =
                document.querySelector(".artistDisplayBio");
              artistDisplayBio.innerHTML = `${data.artistDisplayBio} `;
            });
        });
    }

    crud.getRequest("http://localhost:8080/api/planets", (planets) => {
      card.innerHTML = FemaleArt(femaleArt);
    });
    app.appendChild(card);
    hideCards();
  });
  renderPlanetInfo();
}
function hideCards() {
  const cards = document.querySelector(".cards");
  cards.style.display = "none";
}

function navGrades14() {
  const grades14Elem = document.querySelector(".nav-list__grades14");
  grades14Elem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Grades14();
  });
}

function navGames() {
  const gamesElem = document.querySelector(".nav-list__games");
  gamesElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Games();
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
  const loginButton = document.querySelector(".add_student_submitBtn");
  const app = document.querySelector("#app");
  loginButton.addEventListener("click", () => {
    console.log("button firing");
    // crud.getRequest("http://localhost:8080/api/students", (students) => {
    //   app.innerHTML = AddStudent(students);
    // })
  });
}

function navLearning() {
  const learningElem = document.querySelector(".nav-list__learn");
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
  const aboutElem = document.querySelector(".header__parents_aboutUs");
  aboutElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = About();
  });
}

function navContact() {
  const contactElem = document.querySelector(".header__parents_contactUs");
  contactElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Contact();
  });
}

function navFaq() {
  const faqElem = document.querySelector(".header__parents_faq");
  faqElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Faq();
  });
}

function navTerms() {
  const termsElem = document.querySelector(".header__parents_terms");
  termsElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Terms();
  });
}

function navPrivacy() {
  const privacyElem = document.querySelector(".header__parents_privacy");
  privacyElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Privacy();
  });
}

function footerFaq() {
  const footerFaqElm = document.querySelector(".footer__faq");
  footerFaqElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Faq();
  });
}

function footerAbout() {
  const footerFaqElm = document.querySelector(".footer__about");
  footerFaqElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = About();
  });
}

function footerContact() {
  const footerFaqElm = document.querySelector(".footer__contact");
  footerFaqElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Contact();
  });
}

function footerTerms() {
  const footerFaqElm = document.querySelector(".footer__terms");
  footerFaqElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Terms();
  });
}
