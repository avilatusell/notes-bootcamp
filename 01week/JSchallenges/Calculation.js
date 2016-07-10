// Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them
function Calculation () {
	var total = 0;
	var text = "";
	for (var i = 0; i < 500; i++) {
		if (i % 23 === 0) {
			total = total + i;
			console.log(i);
		}
	}
	return "The sum of all of them is " + total;
}
