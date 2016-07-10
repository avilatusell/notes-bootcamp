/* The fibonacci sequence is a mathematical sequence of integers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

0, 1, 1, 2, 3, 5, 8, 13, ..

Define a function called fibonacci with a single argument n The function should return the nth number of the fibonacci sequence.

Hint: Use a recursive function */



// código de Ángel
function fibonacci(num){
	var result = 0;
	var count = 2;
	var num1 = 0;
	var num2 = 1;
	if (num===1) {return 0;}
	else if (num===2) {return 1;}

	fibR(num1, num2);

	function fibR(num1, num2){
		result = num1 + num2;
		num1 = num2;
		num2 = result;
		count ++
		if (count < num) {
			fibR(num1, num2)
		}
	}
	return result;
}



function recursive (n) {
	if (n<=2) {
		return 1;{
			else 
		}
	}
}