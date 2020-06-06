const burger = document.querySelector(".burger")
const menu = document.querySelector(".burger-menu-wrapper")

burger.addEventListener("click", () => {
    if (menu.display === "none") {
        menu.display = "block"
    } else {
        menu.display = "none"
    }
    console.log("clicked menu button")
})
