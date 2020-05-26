function addSegments(digitId){
    for(let i = 0; i <= 6; i++){
        let segment = document.createElement("div");
        segment.className = "segment off segment"+i;
        document.getElementById(digitId).appendChild(segment);
    }
}

function updateDigit(digitId, value){

    let segmentStates = [
        [1, 1, 1, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1]
    ];

    for(let i = 0; i <= 6; i++){
        if (segmentStates[value][i] == 1){
            document.querySelectorAll("#"+digitId+" > .segment"+i)[0].className = "segment segment"+i;
        }else{
            document.querySelectorAll("#"+digitId+" > .segment"+i)[0].className = "segment off segment"+i;
        }
    }
}

function badSmiley(){
    let context = document.getElementById("smiley").getContext("2d");
	context.beginPath();
    context.lineWidth = 3;
    context.fillStyle = "green";
    context.arc(100,100,75, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();

    
    context.beginPath();
    context.fillStyle = "red";
    context.strokeStyle='white';
    context.arc(65,70,5, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.fillStyle = "red";
    context.strokeStyle='white';
    context.arc(135,70,5, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();

    
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle='black';
    context.arc(99,150,50, Math.PI,0 );
    context.closePath();
    context.stroke();
}

function goodSmiley(){
    let context = document.getElementById("smiley").getContext("2d");
	context.beginPath();
    context.lineWidth = 3;
    context.fillStyle = "green";
    context.arc(100,100,75, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();

    
    context.beginPath();
    context.fillStyle = "red";
    context.strokeStyle='white';
    context.arc(65,70,5, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.fillStyle = "red";
    context.strokeStyle='white';
    context.arc(135,70,5, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();

    
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle='black';
    context.arc(99,120,50, 0, Math.PI);
    context.closePath();
    context.stroke();


}




function init(){
    addSegments("hours-tens");
    addSegments("hours-units");
    addSegments("minutes-tens");
    addSegments("minutes-units");
    addSegments("seconds-tens");
    addSegments("seconds-units");
}

function buttons(){
    let play = document.getElementsByClassName("button1")[0];
    play.addEventListener("click",funcPlay);
    let stop = document.getElementsByClassName("button2")[0];
    stop.addEventListener("click",funcStop);
    let clear = document.getElementsByClassName("button3")[0];
    clear.addEventListener("click",funcClear);
}

let minutes = 0;
let hours = 0;
let seconds = 0;

let simple;

function funcPlay(){
    simple = setInterval(uptateTime, 1000);
}

function uptateTime(){
    seconds++;
    if(seconds==60){
        minutes++;
        seconds =0;
    }
    if(minutes==60){
        hours++;
        minutes =0;
    }
    if(seconds== 31){
        badSmiley();
    }
    if(seconds ==30){
        goodSmiley();
    }


    updateDigit("hours-tens", Math.trunc(hours/10));
    updateDigit("hours-units", hours%10);
    updateDigit("minutes-tens", Math.trunc(minutes/10));
    updateDigit("minutes-units", minutes%10);
    updateDigit("seconds-tens", Math.trunc(seconds/10));
    updateDigit("seconds-units", seconds%10);
}




function funcStop(){
    clearInterval(simple);
}

function funcClear(){
    clearInterval(simple);
    minutes = 0;
    hours = 0;
    seconds = 0;
    updateDigit("hours-tens", 0);
    updateDigit("hours-units", 0);
    updateDigit("minutes-tens", 0);
    updateDigit("minutes-units", 0);
    updateDigit("seconds-tens", 0);
    updateDigit("seconds-units", 0);
}




function main(){
    init();
    buttons();


}


main();
