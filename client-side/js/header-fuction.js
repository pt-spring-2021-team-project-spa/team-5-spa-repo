var parentsBtn = document.querySelector('.header__parents_button');
var parentsMenu = document.querySelector('.header__parents_menu');
var menuBackdrop = document.querySelector('.header__parentsMenu_backdrop');
var menuCloseBtn = document.querySelector('.menu__close');

function openParentsMenu() {
    parentsMenu.style.display = 'block';
    menuBackdrop.style.display = 'block';
}

function closeParentsMenu() {
    parentsMenu.style.display = 'none';
    menuBackdrop.style.display = 'none';
}

parentsBtn.addEventListener('click', () => {
    openParentsMenu();
});

menuBackdrop.addEventListener('click', () => {
    closeParentsMenu();
});

menuCloseBtn.addEventListener('click', () => {
    closeParentsMenu();
});