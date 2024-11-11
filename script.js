// Scroll Functionality for Back-to-Top Button
window.onscroll = function() {
    let backToTopBtn = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Dark Mode Toggle
let darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "🌙 Toggle Dark Mode";
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
