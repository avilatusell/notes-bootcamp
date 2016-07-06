function multiplicationColumn (x) {
	var total = 1;
	var result = '';
	for (var i = 1; i <= 10; i++) {
		total = x* i;
		result += total + '\n';
	}
	return result;
}