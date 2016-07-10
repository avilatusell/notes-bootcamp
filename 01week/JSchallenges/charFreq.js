charFreq.js

//Write a function charFreq() that takes a string and builds a frequency listing 
//of the characters contained in it. Represent the frequency listing as a Javascript 
//object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq(text) {
	var numCharacters = text.length;
	var currentCharacter;
	var freqCharacters = {};

	function isValidCharacter (char){
		var invalidCharacters = " ,?¿!¿";
		return (invalidCharacters.indexOF(char) !== -1);
	}

	for ( var i = 0; i < numCharacters; i++ ) {
		currentCharacter = text[i]; // va a contener carácterres
		//if(" ,?¿!¿".indexOF(currentCharacter == -1)  // "hola".indexOF("h")=> 0. PEr si volem discriminar els espais i caràcters
		if (isValidCharacter(currentCharacter)) {
			if (!freqCharacters[currentCharacter]) {
				freqCharacters[currentCharacter] = 1; // aquí diem que el nostre objecte object.lletra = valor
					} 
					else {
						freqCharacters[currentCharacter]++; // aquí diem que el nostre objecte object.lletra = valor
						}
					}
		}			

	return freqCharacters;
		
}


// et retorna l'objecte, amb el tipus de lletres i el nº de vegades.
/*
function getLongestNumbers (arrayNumbers) {
	if (typeof(arrayNumbers) = "string") {

	}

}
*/
