//Write a JavaScript function to check whether an input is an array or not.

function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}


isArray([1, 2, 4, 0])

isArray('w3resource')

//Test Data :
//console.log(is_array('w3resource')); 
//console.log(is_array([1, 2, 4, 0]));
//false
//true