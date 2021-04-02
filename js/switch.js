/** @type {HTMLAnchorElement[]} */
const states = document.querySelectorAll(".switch a");

/** @param {string} hash */
function setSwitch(hash) {
    document.querySelectorAll(".switch-section").forEach((element) => element.classList.add("hidden"));
    document.querySelector(hash).classList.remove("hidden");
    states.forEach((state) => {
        state.classList.remove("selected");
        if (state.getAttribute("href") === hash) {
            state.classList.add("selected");
        }
    });
}

states.forEach((state) => {
    state.addEventListener("click", (e) => {
        e.preventDefault();
        history.pushState(null, null, state.href);
        setSwitch(state.getAttribute("href"));
    });
});

setSwitch(location.hash);
