// Write a function that writes in the console the multiplication table (from 1 to 10)

function Multiplication (x) {
	var total = 1;
	var totalc = 1;
	var result = '';
	var resultc = '';
	for (var i = 1; i <= 10; i++) {
		for (var j = 2; j <= 10; j++) {
		total = x* j;
		result += total + " " + '\v';
		}
		total = x* i;
		result += total + '\n';
	}
	return result + resultc;
}

