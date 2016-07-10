function multiplicationColumn (x) {
	var total = 0;
	var result = '';
	for (var i = 0; i <= 10; i++) {
		total = x* i;
		result += total + '\n';
	}
	return result;
}