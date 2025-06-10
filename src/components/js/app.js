
window.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll(".navHead > a");
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Highlight on page load
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("activeBtn");
        }

        // Click handling for single-page behavior
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('activeBtn'));
            link.classList.add('activeBtn');
        });
    });
});
