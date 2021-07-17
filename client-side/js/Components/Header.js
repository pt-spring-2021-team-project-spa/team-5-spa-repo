export default function Header(){
    return`
    <div class="header__section_parents">
        <button class="header__parents_button">Grownups</button>
        <div class="header__parentsMenu_backdrop"></div>
        <div class="header__parentsBtn_content">
            <ul class="header__parents_menu">
                <li class="header__parents_aboutUs">About Us</li>
                <li class="header__parent_contactUs">Contact Us</li>
                <li class="header__parent_faq">FAQ</li>
                <li class="header__parent_terms">Terms & Conditions</li>
                <li class="header__parent_privacy">Privacy Policy</li>
            </ul>
        </div>
    </div>
    <ul class = "nav-list">
        <li class="nav-list__home">Home</li>
        <li class="nav-list__grades">Grades 5-8</li>
        <li class="nav-list__games">Games</li>
        <li class="nav-list__learning">Learning</li>
    </ul>
    `;
}