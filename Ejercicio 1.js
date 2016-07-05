
function getRange(x1, x2) {
	
	var result = "";
	if (x2 < x1 ) {
		returns -1;
	} 
	for (var i=x1; i<=x2; i++) {
		result += i + " ";
	}
	// for ( ; x1<=x2; x1++) {
	// 	result += x1 + " ";
	// }
	return result;
}