// Write a function that writes in the console the multiplication table (from 1 to 10)

function multiplicationTable () {

	var result = '';
	
	for ( var j = 0; j < 10; j++) {
		for ( var i = 0; i < 10; i++ ) {
			result += (i+1) * (j+1) + " " +"\t" ;
		}
		result += "\n";
	}
	return result;
	
}

console.log(multiplicationTable());