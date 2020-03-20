function repeat(s,n){
    return s.repeat(n);
}

function truncate(s,n){
    if (s.length > n){
        return s.substring(0,n-2) + "...";
    }else{
        return s;
    }
    

}