const burger = document.querySelector(".burger")
const menu = document.querySelector(".burger-menu-wrapper")
const closeMenu = document.querySelector(".menu-close-btn")

burger.addEventListener("click", () => {
    menu.style.transform = "translate(0)"
})
closeMenu.addEventListener("click", () => {
    menu.style.transform = "translate(100vw)"
})

const dropdown = document.querySelector(".nav-folder")
const dropdownContent = document.querySelector(".nav-folder-content")

dropdown.addEventListener("click", () => {
    if (dropdownContent.style.display == "none") {
        dropdownContent.style.display = "flex"
    } else {
        dropdownContent.style.display = "none"
    }
})
