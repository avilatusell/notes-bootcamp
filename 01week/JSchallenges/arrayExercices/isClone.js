//arrayClone.js

//Write a JavaScript function to clone an array.



/* function arrayClone (arrayInput) {
	var clone = [];
	var newClone = [];
	for ( var i=0; i<arrayInput.length; i++) {
		newClone +=  clone.push(arrayInput[i]);
	}
	return newClone;
}
(surt com un string)
*/

function arrayClone (arrayInput) {
	newArray = arrayInput;
	return newArray;
}

console.log(arrayClone([1, 2, 4, 0]))
console.log(arrayClone([1, 2, [4, 0]]))

