// la función está mal porque el push devuelve el nº de elementos que tenemos en el array 
// y no el valor del elemento 
/*function fibonacci (n) {
  var fibonacciSec = [0,1];
  var newFib;
  var result = 0;

  if (n === 0) {
    result = fibonacciSec[0];
  } 
  else if (n === 1) {
    result = fibonacciSec[1];
  } 
  else if ( n > 1) {
    for ( var i = n ; i<=n; i++) {
   		newFib = fibonacciSec.push(fibonacciSec[i-1]+fibonacciSec[i-2]);
      result = newFib;
    }
  }
  console.log(fibonacciSec);
  return result;
}

fibonacci(3)
*/

//versión comentada en clase
//0, 1, 1, 2, 3, 5, 8, 13, ..

function fibonacci (n) {
  if (n <= 0) return "-1";
  if (n === 1) return 0;
  if (n === 2) return 1;
  return fibonacci (n-1) + fibonacci (n-2);
}

function getFibSequence (num) {
  var arrayFibo = [];
  for (var i = 1; i<=num; i++) {
    arrayFibo.join (" - ");
  }
}

// Test Unit
//Ejemplo 1:
  console.log ( fibonacci(1) === 0 )
  console.log ( fibonacci(2) === 1 )
  console.log ( fibonacci(3) === 2 )
  console.log ( fibonacci(4) === 3 )

// Ejemplo2:
function testFibonacci() {
  var resultTest;
  if ( !(fibonacci(1) === 0))  return false;
  if ( !(fibonacci(2) === 1))  return false;
  if ( !(fibonacci(3) === 2))  return false;
  if ( !(fibonacci(4) === 3))  return false;

  return true;
 
}







