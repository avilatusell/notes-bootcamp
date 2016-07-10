// versión 1
function factorial(n) {
	if (n===1) {
		return 1;
	}
	else {
		return n*factorial(n-1);
	}
}


// versión 2

	var var1 = 5;
	function factorial(n) {
		if(n === 1) return var1;
	    var1 = var1 * (n - 1);
	    return factorial(n - 1);
	}
