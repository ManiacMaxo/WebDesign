const menu = document.querySelector('.dropdown-menu')

window.onload = () => {
    menu.classList.remove('hidden')
}

const dropdown = document.querySelector('.dropdown > span')

dropdown.addEventListener('click', () => {
    menu.classList.toggle('translate-100')
    document.querySelector('.fa-angle-down').classList.toggle('down')
})
