/* is_Blank

Write a JavaScript function to check whether a string is blank or not. Go to the editor

console.log(is_Blank('')); 
console.log(is_Blank('abc'));
true 
false
*/

function is_Blank (text) {

	var len = text.length;
	if (len === 0) {
		return true;
	}
	return false;
}

