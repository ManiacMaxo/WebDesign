// const burger = document.querySelector('.burger')
// const menu = document.querySelector('.burger-menu-wrapper')
// const body = document.querySelector('body')
// const burgerFolder = document.querySelector('.burger-menu-folder')

// window.onload = () => {
//     menu.classList.remove('display-none')
// }

// burger.addEventListener('click', () => {
//     menu.classList.toggle('hidden')
//     burger.classList.toggle('active')
//     body.classList.toggle('no-scroll')
// })

// burgerFolder.addEventListener('click', () => {
//     menu.style.transform = 'translateX(-100vw)'
// })

const dropdown = document.querySelector('.dropdown > span')

dropdown.addEventListener('click', () => {
    document.querySelector('.fa-angle-down').classList.toggle('down')
    document.querySelector('.dropdown-menu').classList.toggle('hidden')
})
