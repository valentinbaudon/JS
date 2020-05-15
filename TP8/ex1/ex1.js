function clicked(){
    let button = MouseEvent.button;
    button.style.backgroundColor = (0,0,0);
}

let okButton = document.getElementById("ex1");
okButton.addEventListener("click",clicked);