function survol(MouseEvent){
    let button = document.getElementById("ex2");
    button.style.backgroundColor = "rgb(0,125,255)";
    console.log("x ="+MouseEvent.clientX+"   y ="+MouseEvent.clientY);
}


let okButton = document.getElementById("ex2");
okButton.addEventListener("mouseover",survol);