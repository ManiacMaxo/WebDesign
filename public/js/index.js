const burger = document.querySelector('.burger')
const menu = document.querySelector('.burger-menu-wrapper')
const body = document.querySelector('body')
const burgerFolder = document.querySelector('.burger-menu-folder')

window.onload = () => {
    menu.classList.remove('display-none')
}

burger.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    burger.classList.toggle('active')
    body.classList.toggle('no-scroll')
})

burgerFolder.addEventListener('click', () => {
    menu.style.transform = 'translateX(-100vw)'
})
