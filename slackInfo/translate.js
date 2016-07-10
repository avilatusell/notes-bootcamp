// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate( text ){
​
    var numCharacters = text.length;
    var currentCharacter;
    var translatedText = "";

    for (var i=0; i<numCharacters; i++) {
        currentCharacter = text[i];
        if ( "aeiou ".indexOf(currentCharacter) !== -1 ) {
            translatedText += currentCharacter;
        }
        else {
            translatedText += currentCharacter + "o" + currentCharacter;   
        }
    }

    return translatedText;

}