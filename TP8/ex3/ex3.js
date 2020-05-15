
let fenetre;

function popup(){
    fenetre = window.open("https://www.isen.fr/");  
}
function popupclose(){
    fenetre.close();
}


let okButton = document.getElementById("id1");
okButton.addEventListener("clic",popup);

let okButton2 = document.getElementById("id2");
okButton.addEventListener("clic",popupclose);









function moveTop(){
    let photo = document.getElementById("img");
    photo.style.backgroundPosition = "top";
}

function moveLeft(){
    let photo = document.getElementById("img");
    photo.style.backgroundPosition = "left";
}

function moveRight(){
    let photo = document.getElementById("img");
    photo.style.backgroundPosition = "right";
}

function moveBottom(){
    let photo = document.getElementById("img");
    photo.style.backgroundPosition = "bottom";
}

let Button = document.getElementById("haut");
okButton.addEventListener("clic",moveTop);

let Button2 = document.getElementById("gauche");
okButton.addEventListener("clic",moveLeft);

let Button3 = document.getElementById("droite");
okButton.addEventListener("clic",moveRight);

let Button4 = document.getElementById("bas");
okButton.addEventListener("clic",moveBottom);











