const burger = document.querySelector('.burger')
const menu = document.querySelector('.burger-menu-wrapper')

burger.addEventListener('click', () => {
    console.log('clicked')
    menu.classList.toggle('hide')
})
