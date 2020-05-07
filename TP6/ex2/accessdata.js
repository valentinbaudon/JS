function access(){
    
    let d = document.querySelector("#afterTable");
    let titre = document.title;
    let nbLigne = document.getElementsByTagName("tr").length;
    let nbColonne = document.getElementsByTagName("th").length;
    let nbSemestre = document.querySelectorAll(".c1").length;
    let noteS5E1 = document.querySelectorAll("tr")[9].getElementsByTagName("td")[2].innerText;
    let noteS5E2 = document.querySelectorAll("tr")[10].getElementsByTagName("td")[2].innerText

    d.innerText = "Titre : "+titre+"\nNombre de lignes : "+nbLigne+"\nNombre de colonnes : "+nbColonne+"\nNombre de semestres : "+nbSemestre+"\nNote de S5 de E1 : "+noteS5E1+"\nNote de S5 de E2 : "+noteS5E2+"\n";

    document.querySelectorAll("tr")[9].getElementsByTagName("td")[2].innerText = parseInt(noteS5E1)+2;
    document.querySelectorAll("tr")[9].getElementsByTagName("td")[2].style.fontSize = "25px";
    document.querySelectorAll("tr")[9].getElementsByTagName("td")[2].style.color = "red";

    let zoneTxt = document.createElement("textarea");
    document.body.appendChild(zoneTxt);
}

access();