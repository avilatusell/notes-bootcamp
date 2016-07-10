findLongestWord.js
//Write a function findLongestWord() that takes an array of words 
//and returns the length of the longest one.

function longestWord (word) {
    var numberWords = word.length;
    var theLongestWord = [];
    for (var i = 0; i < numberWords; i++ ) {
        if (word[i].length > theLongestWord.length) {
            theLongestWord = word[i];
        }
    }
    return theLongestWord;
}

longestWord(["avui", "faig", "exercicis"])