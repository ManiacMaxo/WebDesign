const burger = document.querySelector('.burger')
const menu = document.querySelector('.burger-menu-wrapper')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    burger.classList.toggle('active')
    body.classList.toggle('no-scroll')
})
