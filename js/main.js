let div = document.getElementById("clickWrapper")

div.addEventListener('click', () => {
    console.log('toggling');
    console.log(div.children[0].classList);
    if (div.children[0].classList.contains("close")) {
        div.children[0].className = "menu animate"
    } else {
        div.children[0].className = "close animate"
    }
})