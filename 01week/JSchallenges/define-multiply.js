// Define a function sum() and a function multiply() that sums and multiplies 
//(respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) 
//should return 10, and multiply([1,2,3,4]) should return 24.

// función suma de los elementos de un array
function sum(numbers) {
	total = 0;
	for ( i = 0; i < numbers.length ; i++) {
		total = total + numbers[i];
	}
	return total;
}


// función multiplicación de los elementos de un array
function multiply(numbers) {
	total = 1;
	for ( i = 0; i < numbers.length ; i++) {
		total = total*numbers[i];
	}
	return total;
}
