function abs(numbers){
    return numbers.map(function (n){
        return Math.abs(n);
    });

}

function evenOnly(numbers){
    return numbers.filter( (number) => number % 2 == 0);
}

function sum(numbers){
    let nb = 0;
    numbers.forEach( (number) => nb += number);
    return nb;
}

function flatten2D (array){
    let tab = [];
    array.forEach((nb) => nb.forEach( (n) => tab.push(n)));
    return tab;
}

function removeDuplicates2(values){
    return values.filter(function(n, i, array){return !array.includes(n);});
}