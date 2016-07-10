// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function isValidCharacter( char ) {
	var invalidCharacters = " ,?¿!";
	return ( invalidCharacters.indexOf(char) == -1 );
}


function charFreq( text )  {

	var numCharacters = text.length;
	var currentCharacter;
	var freqCharacters = {};

	for (var i=0; i<numCharacters; i++) {
		currentCharacter = text[i];
		if ( isValidCharacter(currentCharacter)  ) {
			if ( !freqCharacters[currentCharacter] ) {
				freqCharacters[currentCharacter] = 1;
			}
			else {
				freqCharacters[currentCharacter]++;
			}
		}
	}

	return freqCharacters;

}