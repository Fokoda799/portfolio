const container = document.querySelector('.container');
const sections = document.querySelectorAll('.section');
let isScrolling = false;

// Fixed selector for navigation items
function updateHeader(currentIndex) {
    const activeSection = sections[currentIndex];
    const logo = document.querySelector('.logo');
    const sectionsBarItems = document.querySelectorAll('.sections-bar li'); // Fixed selector

    // Update logo color
    logo.style.color = activeSection.dataset.logoColor || '#000';

    // Update sections-bar items
    sectionsBarItems.forEach((item, index) => {
        const isActive = index === currentIndex - 1; // Adjust index for navigation items
        item.style.color = currentIndex % 2 === 0 ? '#000' : '#fff';
        item.classList.toggle('active', isActive);
        item.style.transform = `translateX(${(index - (currentIndex - 1)) * 20}px)`;
    });

    logo.textContent = currentIndex === 0 || currentIndex === 5 ? 'HAdid' : 'HA';

    // Handle bars visibility
    const sectionsBar = document.querySelector('.sections-bar');
    sectionsBar.classList.toggle('visible', currentIndex >= 1 && currentIndex <= 4);

    // Update header styles
    header.style.color = activeSection.dataset.headerColor || '#000';
}

function scrollToSection(index) {
    if (isScrolling) return;

    isScrolling = true;
    const targetSection = sections[index];
    const targetPosition = targetSection.offsetTop;

    container.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    updateHeader(index);

    setTimeout(() => {
        isScrolling = false;
    }, 100); // Adjust timeout to match scroll duration
}

// Initialize header with first section's style
updateHeader(0);

// Handle wheel events
container.addEventListener('wheel', (e) => {
    e.preventDefault();
    const currentIndex = Math.floor(container.scrollTop / window.innerHeight);
    const direction = e.deltaY > 0 ? 1 : -1;
    const newIndex = Math.max(0, Math.min(currentIndex + direction, sections.length - 1));

    if (window.innerWidth > 768) {
        scrollToSection(newIndex);
    }
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


const btn = document.getElementById("more");
btn.addEventListener("click", function() {
    scrollToSection(1);
});

const home = document.querySelector('.logo');
home.addEventListener("click", () => {
    scrollToSection(0);
})

const sectionsBar = document.querySelector('.sections-bar');

sectionsBar.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'LI') {
        const index = Array.from(target.parentElement.children).indexOf(target);
        scrollToSection(index + 1);
    }

})

document.querySelector(".btn--projects").addEventListener("click", function() {
    window.location = "../pages/projects.html";
});
