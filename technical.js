const hamburgerButton = document.getElementsByClassName('hamburger-button')[0];
const navLinkSection = document.getElementsByClassName('nav-link-section')[0];

hamburgerButton.addEventListener('click', () => {
    navLinkSection.classList.toggle('active');
});