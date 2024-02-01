let navToggle = document.getElementById("navbar-toggler")

navToggle.addEventListener('click', () => {
    if (navToggle.children[0].children[0].classList.contains("close")) {
        navToggle.children[0].children[0].className = "menu animate"
    } else {
        navToggle.children[0].children[0].className = "close animate"
    }
})