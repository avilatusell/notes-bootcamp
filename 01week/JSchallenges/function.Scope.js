function.Scope

// define a function named callFunc...


function callFunc(f) {
	var f0 = f(0);
	var f1 = f(1);
	return [f0, f0, f1, f1]; //como solo podemos llamar 2 veces, 
}