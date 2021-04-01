/** @type {HTMLImageElement[]} */
const images = document.querySelectorAll(".photo-grid > img");

const imageShowcase = document.querySelector("#image-showcase");

/** @argument {string} src Url for the image to show */
function showPicture(src, alt) {
    const img = imageShowcase.querySelector("img");
    const p = imageShowcase.querySelector("p");
    img.src = src;
    img.alt = alt;
    p.textContent = alt;
    imageShowcase.removeAttribute("hidden");
}

function hidePicture() {
    const img = imageShowcase.querySelector("img");
    img.src = "";
    imageShowcase.setAttribute("hidden", "");
}

imageShowcase.addEventListener("click", hidePicture);
images.forEach((image) => {
    image.addEventListener("click", () => showPicture(image.src, image.alt));
});
