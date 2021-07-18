import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Parents from "./Components/Parents";
import Home from "./Components/Home";
import Students from "./Components/Students";
import Learning from "./Components/Learning";
import About from "./Components/About";
import Grades14 from "./Components/Grades14";
import crud from "./crud/crud";
import StudentInfo from "./rendering/studentInfo";
import ParentInfo from "./rendering/parentInfo";


buildPage();

function buildPage() {
  header();
  footer();
  navStudents();
  navParents();
  navLearning();
  navHome();
  navAbout();
  navGrades();
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
  const studentsElem = document.querySelector(".nav-list__students");
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
    if (event.target.classList.contains("student-name")) {
      const studentId =
        event.target.parentElem.querySelector("#studentId").value;
      crud.getRequest(studentId, (student) => {
        app.innerHTML = StudentInfo(student);
      });
    }
  });
}

function navLearning() {
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
    crud.getRequest("http://localhost:8080/api/parents", (parents) => {
      app.innerHTML = Parents(parents);
    });
    renderParentInfo();
  });
}
function renderParentInfo() {
  const app = document.querySelector("#app");
  app.addEventListener("click", () => {
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

function navAbout() {
  const aboutElem = document.querySelector(".parents-about");
  aboutElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = About();
  });
}

function navHome() {
  const homeElem = document.querySelector(".nav-list__home");
  homeElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Home();
  });
}
