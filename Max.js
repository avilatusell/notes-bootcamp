// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
function Maxnumber(a,b) {
	var max = 0;
	if (a < b) {
		max = b;
	} else {
		max = a;
	}
	return max;
}