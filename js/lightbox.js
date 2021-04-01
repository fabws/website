/** @type {HTMLImageElement[]} */
const images = document.querySelectorAll(".photo-grid > img");

const imageShowcase = document.querySelector("#image-showcase");

/** @argument {string} src Url for the image to show */
function showPicture(src) {
    const img = imageShowcase.querySelector("img");
    img.src = src;
    imageShowcase.removeAttribute("hidden");
}

function hidePicture() {
    const img = imageShowcase.querySelector("img");
    img.src = "";
    imageShowcase.setAttribute("hidden", "");
}

imageShowcase.addEventListener("click", hidePicture);
images.forEach((image) => {
    image.addEventListener("click", () => showPicture(image.src));
});
