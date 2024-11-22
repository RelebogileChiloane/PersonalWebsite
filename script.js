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
  <!-- JavaScript -->
  <script>
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    darkModeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
        darkModeToggle.classList.remove("moon-icon");
        darkModeToggle.classList.add("sun-icon");
      } else {
        darkModeToggle.classList.remove("sun-icon");
        darkModeToggle.classList.add("moon-icon");
      }
    });
  </script>
