	// Write a function translate() that will translate a text into "rövarspråket". 
// That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
function translate (text) {
	var splitted = text.split('');
	var newText = [];
	for (i = 0; i < splitted.length; i++) {
		

		
// si no es una vocal
		newText = splitted[i] + "o" + splitted[i];

// si es una vocal 
newText = text [i];
	}
	return newText.join(' , ');
}

var n = n;
function Vocal (n) {
	if (n === "a" || n === "A" || n === "e" || n === "E" || n === "i" || n === "I" || n === "o" || n === "O" || n === "u" || n === "U") {
		return n; }
		else {
			return "o";
		}
}





translate("This is fun")