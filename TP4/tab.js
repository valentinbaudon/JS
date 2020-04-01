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

function range(min, max, step){
    let chaine =[];
    for(let a = min; a <= max; a+=step ){
        chaine.push(a);
    }
    return chaine;
}

function nbOccurences(wordList, word){
    let newocc = wordList.split(" ");
    let occ = 0;
    for(occs of newocc){
        if (occs == word){
            occ+=1;
        }
    }
    return occ;
}

function flatten2D(array){
    let tab = [];
    for(let nb of array){
        for(let n of nb){
            tab.push(n);
        }
    }
    return tab;
}

function mult9(){
    
}