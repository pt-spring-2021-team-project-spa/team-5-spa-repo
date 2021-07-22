export default function Header() {
  return `
    <div class="header__section_parents"> 
    <div class="header__parentsMenu_backdrop"></div>  
    <button class="header__parents_button">Grownups</button>
        <div class="header__parentsBtn_content">
            <ul class="header__parents_menu">
                <li class="header__parents_grownups">Grownups
                    <span class="menu__close"><i class="fas fa-times"></i></span>
                </li>
                <li class="header__parents_portal">Grownup's Portal</li>
                <li class="header__parents_students">Your Student</li>
                <li class="header__parents_aboutUs">About Us</li>
                <li class="header__parents_contactUs">Contact Us</li>
                <li class="header__parents_faq">FAQ</li>
                <li class="header__parents_terms">Terms & Conditions</li>
                <li class="header__parents_privacy">Privacy Policy</li>
            </ul>
        </div>
    </div>
    <h1 class="header__title">Space JacKr</h1> 
    <ul class = "nav-list">
        <li class="nav-list__home">
            <p><i class="fas fa-home"></i></p>
            <p>Home</p>
        </li>
        <li class="nav-list__grades14">
            <p><i class="fas fa-graduation-cap"></i></p>
            <p>Grades 1-4</p>
        </li>
        <li class="nav-list__grades58">
            <p><i class="fas fa-graduation-cap"></i></p>
            <p>Grades 5-8</p>
        </li>
        <li class="nav-list__games">Games</li>
        <li class="nav-list__learning">Learning</li>
        <li class="nav-list__apod">APOD</li>
    </ul>
    `;
}
