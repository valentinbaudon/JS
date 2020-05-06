function access(){
    console.log(document.title);
    console.log(document.getElementsByTagName("tr").length);
    let nbColonne = (document.getElementsByTagName("td").length+document.getElementsByTagName("th").length)/document.getElementsByTagName("tr").length;
    console.log(nbColonne);
    console.log(querySelectorAll(".c1").length);
    console.log(document.querySelectorAll("p").length);
    console.log(document.querySelectorAll("img").length);
    console.log(document.querySelectorAll(".synopsis > h2").length);
    console.log(document.querySelector("h1").innerHTML);
    console.log(document.getElementById("2016").querySelectorAll(".film").length);
    console.log(document.querySelectorAll("film > .synopsis > div > p")[1]);
}

access();