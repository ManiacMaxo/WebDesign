const burger = document.querySelector(".burger")
const menu = document.querySelector(".burger-menu-wrapper")

burger.addEventListener("click", () => {
    if (menu.style.transform == "translate(-100vw)") {
        menu.style.transform = "translate(0)"
    } else {
        menu.style.transform = "translate(-100vw)"
    }
    console.log("clicked menu button")
})
