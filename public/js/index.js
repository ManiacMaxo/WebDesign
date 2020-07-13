const burger = document.querySelector('.burger')
const menu = document.querySelector('.burger-menu-wrapper')

burger.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    burger.classList.toggle('active')
})

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
