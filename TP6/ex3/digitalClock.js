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


function init(){
    addSegments("hours-tens");
    addSegments("hours-units");
    addSegments("minutes-tens");
    addSegments("minutes-units");
}


function main(){
    init();
    setInterval(function() {
        var d = new Date();
        updateDigit("hours-tens", Math.trunc(d.getHours()/10));
        updateDigit("hours-units", d.getHours()%10);
        updateDigit("minutes-tens", Math.trunc(d.getMinutes()/10));
        updateDigit("minutes-units", d.getMinutes()%10);
    }, 1000);
}


main();
