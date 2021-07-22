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
import Apod from "./Components/Apod";
import FemaleArt from "./Components/FemaleArt";
import apiActions from "./api-actions/api.js";
import api from "./api-actions/api.js";

buildPage();

function buildPage() {
  header();
  footer();
  navStudents();
  navParents();
  navLearning();
  navHome();
  // navAbout();
  navGrades();
  navApod();
  navFemaleArt();
}

function header() {
  const headerElem = document.querySelector(".header");
  headerElem.innerHTML = Header();
}

function footer() {
  const footerElem = document.querySelector(".footer");
  footerElem.innerHTML = Footer();
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
  app.addEventListener("click", () => {
    if (event.target.classList.contains(".student-name")) {
      const studentId =
        event.target.parentElem.querySelector("#studentId").value;
      crud.getRequest(studentId, (student) => {
        app.innerHTML = StudentInfo(student);
      });
    }
  });
}

function student_parent_sql() {
  const sql = document.querySelector(".nav-list__grades");
  sql.addEventListener("click", () => {
    const app = document.querySelector("#app");
    crud.getRequest('"http://localhost:8080/students/11/parents"');
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
  app.addEventListener("click", () => {
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

function navGrades() {
  const gradesElem = document.querySelector(".nav-list__grades");
  gradesElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Grades14();
  });
}

function navGrades() {
  const gradesElem = document.querySelector(".nav-list__grades");
  gradesElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Grades14();
  });
}

// function navAbout() {
//     const aboutElem = document.querySelector(".parents-about");
//     aboutElem.addEventListener("click", () => {
//     const app = document.querySelector("#app");
//     app.innerHTML = About();
//   });
// }

function navHome() {
  const homeElem = document.querySelector(".nav-list__home");
  homeElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Home();
  });
}

function navApod() {
  const apodElem = document.querySelector(".nav-list__apod");
  apodElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    apiActions.getRequest(
      "https://api.nasa.gov/planetary/apod?api_key=oUr2pzLOuwjgmfRew8Jna0IkUEJou0Zt30a5jIeX",
      (apod) => {
        console.log(apod);
        app.innerHTML = Apod(apod);
      }
    );
  });
}

function navFemaleArt() {
  const femaleArtElem = document.querySelector(".nav-list__femaleArt");
  femaleArtElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    const getWomanUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=woman"
    const apiLink = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"

    fetch(`${getWomanUrl}`)
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .then(data => {
        let objectIDs = data.objectIDs;
        let objectID = objectIDs[Math.floor(Math.random() * objectIDs.length)]; // Select a random Id
        console.log(objectID);

        fetch(`${apiLink}` + objectID)
          .then(resp => resp.json())
          .then(data => {
            console.log(data);
            app.innerHTML = FemaleArt(data);
      
            let title = document.querySelector(".title");
            title.innerHTML = `${data.title} `;

            let department = document.querySelector('.department');
            department.innerHTML = `Department: ${data.department} `

            if (`${data.culture}` === '') {
            } else {
              let culture = document.querySelector('.culture');
              culture.innerHTML = `Culture: ${data.culture} `
            }

            if (`${data.period}` === '') {
            } else {
              let period = document.querySelector('.period');
              period.innerHTML = `Period: ${data.period}`
            }

            let objectEndDate = document.querySelector('.objectEndDate');
            objectEndDate.innerHTML = `Date: ${data.objectEndDate} `

            let primaryImage = document.querySelector(".photo");
            primaryImage.innerHTML = `<img src="${data.primaryImage}" class="primaryImage" > `;

            let artistDisplayName = document.querySelector('.artistDisplayName');
            artistDisplayName.innerHTML = `${data.artistDisplayName} `

            let artistNationality = document.querySelector('.artistNationality');
            artistNationality.innerHTML = `${data.artistNationality} `

            let artistDisplayBio = document.querySelector('.artistDisplayBio');
            artistDisplayBio.innerHTML = `${data.artistDisplayBio} `

          })
    
        let button = document.getElementById('nextButton')
        button.addEventListener('click', () => {
          window.setTimeout(() => {
            window.location.reload(true)
          }, 200)
        })
      
      });
  
  })
}