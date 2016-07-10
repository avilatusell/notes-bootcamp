privateData

var acumulator = (function () {
	var sum = 0;
	return function (x) {
		sum = sum + x;
		return sum;
	}
})()

// utiliza 2 parámetros x y sum. Sum es una variable interna. 
// FUNCIÓN AUTOEJECUTABLE => lo ponemos entre paréntesis y añadimos unos paréntesis al final
//la función acumulator siempre devuelve 3.  La variable a está definida en el padre y allí se para.
//siempre devuelve 3.
// Si la función no ponemos entre () tendríamos que llamar acumulator()()
// acumulator (3) devuelve 3
// acumulator 3 = 3







var a = function () { return 3; } // funció a

si volem que la a retorni 3 =>

var a = (function ())()
a // 3