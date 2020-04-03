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
    return numbers.forEach( (numbers) => nb += numbers);
}