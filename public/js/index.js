const burger = document.querySelector('.burger')
const menu = document.querySelector('.burger-menu-wrapper')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    burger.classList.toggle('active')
    body.classList.toggle('no-scroll')
})

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
