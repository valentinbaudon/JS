


function canvasApp(){
    let context = document.getElementById("smiley").getContext("2d");
	context.beginPath();
    context.lineWidth = 3;
    context.fillStyle = "yellow";
    context.arc(100,100,75, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();

    
    context.beginPath();
    context.fillStyle = "black";
    context.arc(65,70,10, 0, 2*Math.PI);
    context.closePath();
    context.fill();
    
    context.beginPath();
    context.fillStyle = "black";
    context.arc(135,70,10, 0, 2*Math.PI);
    context.closePath();
    context.fill();

    
    context.beginPath();
    context.lineWidth = 6;
    context.arc(99,120,35, 0, Math.PI);
    context.stroke();
    context.closePath();

    context.textBaseline = "middle";
    context.textAlign = "center";
    context.font = "20px sans-serif";
    context.fillText("Hello Canvas!", 100, 200);
}


function displayDateTime(){
    let d = document.querySelector("#afterS");
    const event = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    let date = event.toLocaleTimeString('fr-FR');
    let heure = event.toLocaleDateString('fr-FR',options);
    let timer = 

    d.innerText = "Nous sommes le "+date+"\nIl est actuellement "+heure+"\n";


}

function displayDecrementSeconds(sec){
    if(sec > 0){
    
        let d = document.querySelector("#timer");
        d.innerText ="Le dessin va s'afficher après "+sec+"\n";

        setTimeout(displayDecrementSeconds, 1000, sec-1);
    }else{
        canvasApp();
    }
}

function main(){
    displayDateTime();
    displayDecrementSeconds(10);
    
}

main();

