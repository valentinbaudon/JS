function survol(MouseEvent){
    let button = document.getElementById("ex1");
    button.style.backgroundColor = "rgb(0,125,255)";
    console.log("x ="+MouseEvent.clientX+"   y ="+MouseEvent.clientY);
}


let okButton = document.getElementById("ex1");
okButton.addEventListener("mouseover",survol);