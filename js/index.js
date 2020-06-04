const buger = document.querySelector(".burger")
const menuWrapper = document.querySelector(".menu-wrapper")
const menu = document.querySelector(".menu")

burger.addEventListener("click", () => {
    menuWrapper.display = "block"
    menu.display = "flex"
})
