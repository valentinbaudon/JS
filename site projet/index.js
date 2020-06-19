let fenetre;

function popup(){
    fenetre = window.open("https://www.isen.fr/");  
}

let okButton = document.getElementById("id1");
okButton.addEventListener("clic",popup);