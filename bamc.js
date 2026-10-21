menuToggle = document.querySelector('.menu-toggle');
navLinks = document.querySelector('#nav-links');
navigation = document.querySelector('.navigation');

function closeMenu() {
    navLinks.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
}

menuToggle.addEventListener('click', () => {
    isOpen = navLinks.classList.toggle('is-open');

    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute(
        'aria-label',
        isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
});

// Close when clicking outside the navigation
document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target)) {
        closeMenu();
    }
});

// Close when Escape is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMenu();
        menuToggle.focus();
    }
});