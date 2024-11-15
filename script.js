// Dark mode toggle
const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelectorAll('section').forEach((section) => {
    section.classList.toggle('dark-mode');
  });
  document.querySelector('header').classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Preserve dark mode setting on reload
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  document.querySelectorAll('section').forEach((section) => {
    section.classList.add('dark-mode');
  });
  document.querySelector('header').classList.add('dark-mode');
}
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
