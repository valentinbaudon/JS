function repeat(s,n){
    return s.repeat(n);
}

function truncate(s,n){
    let a = s.substring(0,n);
    if (a.length < n-3){
        return a + "...";
    }else{
        return s;
    }

}