function absTest(){
    let numbers = [-42, 3, 0, -1, 100];
    let absNumbers = abs(numbers);
    console.log(absNumbers);
    console.log(numbers);
}

function evenOnlyTest(){
    console.log( evenOnly([0,1,2,3,4]) );
}

function sumTest(){
    console.log( sum([]) );
    console.log( sum([42,404,1337]) );
}