const burger = document.querySelector('.burger')
const menu = document.querySelector('.burger-menu-wrapper')

burger.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    burger.classList.toggle('active')
})
