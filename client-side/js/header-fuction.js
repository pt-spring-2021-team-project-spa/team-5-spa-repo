var parentsBtn = document.querySelector(".header__parents_button");
var parentsMenu = document.querySelector(".header__parents_menu");
var menuBackdrop = document.querySelector(".header__parentsMenu_backdrop");
var menuCloseBtn = document.querySelector(".menu__close");
var grownupsPortalBtn = document.querySelector(".header__parents_portal");
var studentsBtn = document.querySelector(".header__parents_students");
var aboutUsBtn = document.querySelector(".header__parents_aboutUs");
var contactUsBtn = document.querySelector(".header__parents_contactUs");
var faqBtn = document.querySelector(".header__parents_faq");
var termsBtn = document.querySelector(".header__parents_terms");
var privacyBtn = document.querySelector(".header__parents_privacy");
var startBtn = document.querySelector(".start");

function start() {
  console.log("button firing!");
}

startBtn.addEventListener("click", () => {
  start();
});

function openParentsMenu() {
  parentsMenu.style.display = "block";
  menuBackdrop.style.display = "block";
}

function closeParentsMenu() {
  parentsMenu.style.display = "none";
  menuBackdrop.style.display = "none";
}

parentsBtn.addEventListener("click", () => {
  openParentsMenu();
});

menuBackdrop.addEventListener("click", () => {
  closeParentsMenu();
});

menuCloseBtn.addEventListener("click", () => {
  closeParentsMenu();
});

grownupsPortalBtn.addEventListener("click", () => {
  closeParentsMenu();
});

studentsBtn.addEventListener("click", () => {
  closeParentsMenu();
});

aboutUsBtn.addEventListener("click", () => {
  closeParentsMenu();
});

contactUsBtn.addEventListener("click", () => {
  closeParentsMenu();
});

faqBtn.addEventListener("click", () => {
  closeParentsMenu();
});

termsBtn.addEventListener("click", () => {
  closeParentsMenu();
});

privacyBtn.addEventListener("click", () => {
  closeParentsMenu();
});
