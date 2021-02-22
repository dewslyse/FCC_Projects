const hamburgerButton = document.getElementsByClassName('hamburger-button')[0]
const menuSection = document.getElementsByClassName('menu-section')[0]

hamburgerButton.addEventListener('click', () => {
    menuSection.classList.toggle('active')
})