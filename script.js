// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });

    // Optional: Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});