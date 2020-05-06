function access(){
    console.log(document.title);

    console.log(document.getElementsByTagName("tr").length);

    let nbColonne = (document.getElementsByTagName("td").length+document.getElementsByTagName("th").length)/document.getElementsByTagName("tr").length;
    console.log(nbColonne);

    console.log(document.querySelectorAll(".c1").length);

    let note1 = document.querySelectorAll("tr")[9].getElementsByTagName("td")[2].innerText;
    console.log(note1);

    console.log(document.querySelectorAll("tr")[10].getElementsByTagName("td")[2].innerText);

    console.log(document.querySelectorAll("tr")[9].getElementsByTagName("td")[2].innerText = parseInt(note1)+2);

    document.querySelectorAll("tr")[9].getElementsByTagName("td")[2].style.fontSize = "25px";

    document.querySelectorAll("tr")[9].getElementsByTagName("td")[2].style.color = "red";

    let zoneTxt = document.createElement("textarea");
    document.body.appendChild(zoneTxt);
}

access();