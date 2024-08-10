document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header'); // Correctly select the header element
    const sections = document.querySelectorAll('.projects'); // Select all sections with the class 'projects'

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '-60px 0px 0px 0px', // Offset to account for the header height
        threshold: 0 // Trigger as soon as even one pixel is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.add('active'); // Add 'active' class when section is intersecting
            } else {
                header.classList.remove('active'); // Remove 'active' class when section is not intersecting
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); // Observe each section
    });
});
