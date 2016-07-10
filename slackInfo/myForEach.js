function myForEach ( myArray, myFunction ) {

	var numElements = myArray.length;
	var currentElement;

	for (var i=0; i<numElements; i++) {
		currentElement=myArray[i];
		myFunction(currentElement)
	}

}

var displayValue = 			function(value) { console.log(value); }
myForEach([2,3,4,2,3],  displayValue)
myForEach([2,3,4,2,3], 	function(value) { console.log(value); } )