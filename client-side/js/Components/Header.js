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
    <ul class = "nav-list">
        <li class="nav-list__home">
            <p><i class="fas fa-home"></i></p>
            <p>Home</p>
        </li>
        <li class="nav-list__grades58">
            <p><i class="fas fa-graduation-cap"></i></p>
            <p>Learning</p>
        </li>
        <li class="nav-list__games">
            <p><i class="fas fa-puzzle-piece"></i></p>
            <p>Games</p>
        </li>
    </ul>
    `;
}
