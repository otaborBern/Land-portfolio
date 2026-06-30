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


const form = document.getElementById("contact-form");
const result = document.getElementById("result");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const button = form.querySelector("button");

    button.disabled = true;
    button.textContent = "Sending...";
    result.textContent = "";

    const formData = new FormData(form);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            result.style.color = "green";
            result.textContent = "✅ Your consultation request has been sent successfully!";
            form.reset();
        } else {
            result.style.color = "red";
            result.textContent = data.message || "Something went wrong.";
        }

    } catch (error) {
        result.style.color = "red";
        result.textContent = "Network error. Please try again.";
    }

    button.disabled = false;
    button.textContent = "Request Free Consultation";
});