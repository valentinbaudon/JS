function sumTest(numbers){
    console.log( sum([]) );
    console.log( sum([42,404,1337]) );
}

function sumTest2(numbers){
    console.log( sum2([]) );
    console.log( sum2([42,404,1337]) );
}

function lWTest(words){
    console.log( longestWord(["lot", "of", "words", "of", "different", "sizes"]) );
}

function rangeTest(min,max,step){
    console.log( range(3, 8, 1) );
    console.log( range(40, 90, 20) );
}

function occTest(wordlist,word){
    let text = "bar qux baz foo bar foo qux foo";
    console.log(nbOccurences(text, "foo"));
    console.log(nbOccurences(text, "quux"));
    console.log(nbOccurences(text, "baz"));
}

function flattenTest(array){
    console.log( flatten2D([[1,2], [3,4], [5,6]]));
console.log( flatten2D([[1,2], [3,4,5], [6]]));
}