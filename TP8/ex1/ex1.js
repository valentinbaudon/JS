function clicked(){
    let button = document.getElementById("ex1");
    button.style.backgroundColor = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
}

let okButton = document.getElementById("ex1");
okButton.addEventListener("click",clicked);