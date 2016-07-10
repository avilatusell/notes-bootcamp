forEach.js
 function myForEach (myArray, myFunction) {

var numElements = myArray.lenght;
var currentElement;
for (var i=0; i<numElements; i++){
	currentElement= myArray[i];
	myFunction(currentElement)
}


 }



 myForEach[1,2,3,4], function (value) { console.log(value)}


 myForEach ([])   ,displayValue