export default function Header(){
    return`
    <div class="header__section_parents">
        <button class="header__parents_button">Grownups</button>
        <div class="header__parentsMenu_backdrop"></div>
        <div class="header__parentsBtn_content">
            <ul class="header__parents_menu">
                <li class="header__parents_grownups">Grownups
                    <span class="menu__close"><i class="fas fa-times"></i></span>
                </li>
                <li class="header__parents_aboutUs">About Us</li>
                <li class="header__parents_contactUs">Contact Us</li>
                <li class="header__parents_faq">FAQ</li>
                <li class="header__parents_terms">Terms & Conditions</li>
                <li class="header__parents_privacy">Privacy Policy</li>
            </ul>
        </div>
    </div>
    <ul class = "nav-list">
        <li class="nav-list__home">Home</li>
        <li class="nav-list__grades">Grades 5-8</li>
        <li class="nav-list__games">Games</li>
        <li class="nav-list__students">Students</li>
        <li class="nav-list__parents">Parents</li>
        <li class="nav-list__learning">Learning</li>
    </ul>
    `;
}