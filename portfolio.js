const hamburgerButton = document.getElementsByClassName('hamburger-button')[0];
const navSection = document.getElementsByClassName('nav-section')[0];

hamburgerButton.addEventListener('click', () => {
    navSection.classList.toggle('active');
});