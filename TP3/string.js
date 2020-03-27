function repeat(s,n){
    return s.repeat(n);
}

function truncate(s,n){
    if (s.length > n){
        return s.substring(0,n-3) + "...";
    }else{
        return s;
    }
}

function isPalindrome(s){
    for (let i = 0; i < (s.length)/2;i++){
        if (s[i] != s[s.length-i-1]){
            return false;
        }
    }
    return true;
}

function swapCase(s){
    let a = "";
    for (let i = 0; i < (s.length);i++){
        if (s[i] == s[i].toUpperCase()){
            a+=s[i].toLowerCase();
        }else{
            a+=s[i].toUpperCase();
        }
    }
    return a;
}