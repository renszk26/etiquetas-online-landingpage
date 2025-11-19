// js/main.js

document.addEventListener("DOMContentLoaded", () => {
    initGlideCarousel();
    initMobileMenu();
    setCurrentYear();
});

function initGlideCarousel() {
    if (typeof Glide !== "undefined" && document.querySelector(".glide")) {
        const config = {
            type: "carousel",
            perView: 1,
            autoplay: 6000,
            hoverpause: true,
            animationDuration: 1000,
            gap: 0
        };
        new Glide(".glide", config).mount();
    }
}

function initMobileMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".navegacao");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("aberto");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Fecha o menu ao clicar em um link
    nav.addEventListener("click", (e) => {
        if (e.target.tagName.toLowerCase() === "a") {
            nav.classList.remove("aberto");
            toggle.setAttribute("aria-expanded", "false");
        }
    });
}

function setCurrentYear() {
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}
