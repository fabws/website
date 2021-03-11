const hamburgerButton = document.querySelector("#hamburger-menu-icon");
const navBar = document.querySelector("nav#navbar");

function showHamburgerMenu() {
    navBar.classList.add("open");
}

function hideHamburgerMenu() {
    navBar.classList.remove("open");
}

hamburgerButton.addEventListener("click", () => {
    showHamburgerMenu();
});
