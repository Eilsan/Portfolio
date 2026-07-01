const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
        header.classList.add("smaller");
    } else {
        header.classList.remove("smaller");
    }
});