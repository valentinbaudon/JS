function sum(numbers){
    let nb = 0;
    for(let number of numbers){
        nb+=number;
    }
    return nb;
}

function sum2(numbers){
    let nb = 0;
    for(let a= 0; a < numbers.length; a++){
        nb+=numbers[a];
    }
    return nb;
}

function longestWord(words){
    let res = "";
    for(let word of words){
        if(word.length > res.length){
            res = word;
        }
    }
    return res;
}