const burger = document.querySelector(".burger")
const menu = document.querySelector(".burger-menu-wrapper")
const closeMenu = document.querySelector(".menu-close-btn")
const view = document.querySelector("body")

burger.addEventListener("click", () => {
    menu.style.transform = "translate(0)"
    view.style.overflow = "hidden"
})
closeMenu.addEventListener("click", () => {
    menu.style.transform = "translate(100vw)"
    view.style.overflow = ""
})

const dropdown = document.querySelector(".nav-folder")
const dropdownContent = document.querySelector(".nav-folder-content")

dropdown.addEventListener("click", () => {
    dropdownContent.style.display =
        dropdownContent.style.display == "none" ? "flex" : "none"
})
