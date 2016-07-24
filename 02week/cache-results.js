>> function createCachedMultiplication() {
	var results = {};
	return function(a,b) {
		if (!results[a+"*"+b]) {
			results[a+"*"+b] = a*b;
			console.log ("calculated...")
			return results[a+"*"+b]
		}
		else {
			console.log ("from cache...")
			return results[a+"*"+b]
		}
		
	}
}

>> var multiplicate = createCachedMultiplication()

>> multiplicate(2,3)
calculated...
6
>> multiplicate(2,3)
from cache...
6