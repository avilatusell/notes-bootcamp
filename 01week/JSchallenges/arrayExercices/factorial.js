function factorial(n) {
	if (n===1) {
		return 1;
	}
	else {
		return n*factorial(n-1);
	}
}

//versión con ternario

function factorial(n) {
	if (n===1) ? 1 : n*factorial(n-1);  
}

// ternario => es como el if. si la primera condicion con el ? se ejecuta 1 y si no (:) la otra condición
