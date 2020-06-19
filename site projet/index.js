let fenetre;

function popup(){
    fenetre = window.open("https://docs.google.com/spreadsheets/d/1-w823MbQIV07wWIZYEoNHMDf75ToaMFLGbxnDWXUB_8/edit?usp=drive_web&ouid=101663960201121362377");  
}

let okButton = document.getElementById("id1");
okButton.addEventListener("clic",popup);