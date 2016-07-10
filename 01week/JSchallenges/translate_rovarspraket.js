// Write a function translate() that will translate a text into "rövarspråket". 
// That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function isVowel (char) {
	char = char.toLowerCase();
	return ( "aeiou ".indexOf(char) != -1 )
}
// función para identificar si es una vocal o no. Si hay una maúscula, con el toLowerCase lo solucionamos.


function translateRovarspraket ( text ) {

	var numCharacters = text.length;
	var currentCharacter = "";
	var finalTranslation = "";

	for (var i=0; i<numCharacters; i++) {
		char = text[i];
		if ( isVowel(char) ) {
			finalTranslation += char;
		}
		else {
			finalTranslation += char + "o" + char;	
		}
	}

	return finalTranslation;

}

translateRovarspraket("this is fun")

"juanma garrido".indexOf("juanma")