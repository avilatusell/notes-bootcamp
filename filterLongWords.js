//filterLongWords.js

//Write a function filterLongWords() that takes an array of words and an integer 
//i and returns the array of words that are longer than i.

function filterLongWords(words, n) {
    var myLength = words.length;
    var myWords = [];
    for (var i = 0; i < myLength; i++) {
        if (words[i].length > n) {
            myWords = myWords + " " + words[i];
        }
    }
    return myWords;
}


filterLongWords(["Parrufo","Panxu","lalala"], 5)


// ==> ¿por qué al principio del resultado me queda un espacio?