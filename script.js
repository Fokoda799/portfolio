const container = document.querySelector('.container');
const sections = document.querySelectorAll('.section');
let isScrolling = false;

function scrollToSection(index) {
    if (isScrolling) return;

    isScrolling = true;
    const targetSection = sections[index];
    const targetPosition = targetSection.offsetTop;

    container.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    updateHeader(newIndex);

    setTimeout(() => {
        isScrolling = false;
    }, 500); // Adjust timeout to match scroll duration
}

// Handle wheel events
container.addEventListener('wheel', (e) => {
    e.preventDefault();
    const currentIndex = Math.floor(container.scrollTop / window.innerHeight);
    const direction = e.deltaY > 0 ? 1 : -1;
    const newIndex = Math.max(0, Math.min(currentIndex + direction, sections.length - 1));

    scrollToSection(newIndex);
}, { passive: false });

// Handle keyboard events
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const currentIndex = Math.floor(container.scrollTop / window.innerHeight);
        const direction = e.key === 'ArrowDown' ? 1 : -1;
        const newIndex = Math.max(0, Math.min(currentIndex + direction, sections.length - 1));

        scrollToSection(newIndex);
    }
});