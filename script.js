document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links'); // Target the ul element with nav-links

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            // Optional: Toggle an 'active' class on the button itself for styling changes
            navToggle.classList.toggle('active');
        });

        // Close nav menu when a link is clicked (for single-page navigation or convenience)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.classList.remove('active');
            });
        });
    }

    // Active link highlighting
    const allNavLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;

    allNavLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentPath === linkPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Ensure only one link is active
        }
    });
});
