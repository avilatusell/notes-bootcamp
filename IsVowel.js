function IsVowel(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "A" ) {
            return true;
        } else if (str[i] === "e" || str[i] === "E" ) {
            return true;
        } else if (str[i] === "i"  || str[i] === "I" ) {
            return true;
        } else if (str[i] === "o"  || str[i] === "O") {
            return true;
        } else if (str[i] === "u"  || str[i] === "U") {
            return true;
        } else {
            return false;
            }
}