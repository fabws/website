const hamburgerButton = document.querySelector("#hamburger-menu-icon");
const navBar = document.querySelector("nav#navbar");

function showHamburgerMenu() {
    navBar.classList.add("open");
}

function hideHamburgerMenu() {
    navBar.classList.remove("open");
}

function toggleHamburgerMenu() {
    if (navBar.classList.contains("open")) {
        hideHamburgerMenu();
    } else {
        showHamburgerMenu();
    }
}

hamburgerButton.addEventListener("click", toggleHamburgerMenu);
document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop) {
        navBar.classList.add("scrolled");
    } else {
        navBar.classList.remove("scrolled");
    }
}, {passive: true});
