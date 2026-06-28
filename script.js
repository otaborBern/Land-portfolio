const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const expanded =
        menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
        "aria-expanded",
        !expanded
    );

    menuToggle.textContent =
        expanded ? "☰" : "✕";

});


/*Close the menu after clicking a link*/

const navLinks =
document.querySelectorAll(".navbar__link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});




/*Close the menu when resizing to desktop*/
window.addEventListener("resize", () => {

    if(window.innerWidth >= 768){

        navMenu.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});