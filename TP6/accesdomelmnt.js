function access{
    console.log(document.title);
    console.log(document.body);
    console.log(document.getElementsByTagName("a")[2].href);
    console.log(document.getElementsByClassName("titre")[0]);
    console.log(document.querySelectorAll("p").length);
    console.log(document.querySelectorAll("img").length);
    console.log(document.querySelectorAll(".synopsis > h2").length);
    console.log(document.querySelector("h1"));
    console.log(document.getElementById("2016").querySelectorAll(".film").length);
    console.log(document.querySelectorAll("film > .synopsis > div > p")[1]);


}

access();