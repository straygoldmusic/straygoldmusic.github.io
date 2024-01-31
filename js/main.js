let div = document.getElementById("menuIcon")

div.addEventListener('click', () => {
    if (div.classList.contains("close")) {
        div.className = "menu animate"
    } else {
        div.className = "close animate"
    }
})