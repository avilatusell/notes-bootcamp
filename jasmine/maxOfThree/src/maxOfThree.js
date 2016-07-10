// Define a function max() that takes two numbers as arguments and returns the 
//largest of them. 
//Use the if-then-else construct available in Javascript.


function maxOfThree(a,b,c) {
	if (a>b && b>c) {
		return a;
	} else  if (a>b && b<c) {
		return a; 
		}
		else {
			return -1;
		}	
		
}
