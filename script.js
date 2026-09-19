// Smoothly reveal sections as they enter the viewport

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.1
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// Change navbar appearance when scrolling

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(8, 9, 13, 0.95)";
    } else {
        navbar.style.background = "rgba(8, 9, 13, 0.75)";
    }

});
