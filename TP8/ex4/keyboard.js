function pressed(e){
    switch (e.keyCode) {
        case 65:
            document.getElementById("key-a").classList.add("pressed")
            document.getElementById("key-a").classList.remove("released")
            break;
        case 90:
            document.getElementById("key-z").classList.add("pressed")
            document.getElementById("key-z").classList.remove("released")
            break;
        case 69:
            document.getElementById("key-e").classList.add("pressed")
            document.getElementById("key-e").classList.remove("released")
        break;
        case 82:
            document.getElementById("key-r").classList.add("pressed")
            document.getElementById("key-r").classList.remove("released")
            break;
        case 54:
            document.getElementById("key-t").classList.add("pressed")
            document.getElementById("key-t").classList.remove("released")
            break;
        case 89:
            document.getElementById("key-y").classList.add("pressed")
            document.getElementById("key-y").classList.remove("released")
            break;
     
    }
}

function released(e){
    switch (e.keyCode) {
        case 65:
            document.getElementById("key-a").classList.remove("pressed")
            document.getElementById("key-a").classList.add("released")
            break;
        case 90:
            document.getElementById("key-z").classList.remove("pressed")
            document.getElementById("key-z").classList.add("released")
            break;
        case 69:
            document.getElementById("key-e").classList.remove("pressed")
            document.getElementById("key-e").classList.add("released")
        break;
        case 82:
            document.getElementById("key-r").classList.remove("pressed")
            document.getElementById("key-r").classList.add("released")
            break;
        case 54:
            document.getElementById("key-t").classList.remove("pressed")
            document.getElementById("key-t").classList.add("released")
            break;
        case 89:
            document.getElementById("key-y").classList.remove("pressed")
            document.getElementById("key-y").classList.add("released")
            break;
     
    }
}





function main(){
    document.addEventListener("keydown", pressed);
    document.addEventListener("keyup", released);
    
}


main();