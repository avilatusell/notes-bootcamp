/**
 * Created by ignasi on 06/07/16.
 */
var mathy = function(x) {
    return function (y) {
        return function (z) {
            return (x / y) - z;
        }
    }
}


mathy (100)(2)(3)
// 47

var operateWith100 = mathy (100) // ya no puedo tocar el valor de "x", lo hemos creado para que no puedan tocar el valor. Son variables privadas


operatedwith100 (20)(2)
//3

var operatedWutgSaticDivision = operateWith100 (20)


/* ejemplo binding 1*/
function saySomething (msg, name) {
    return msg + name;
}

var saysomething.bing(this, "Hola tu nombe es ");

// la función bind haría algo así:(manual binding)

var sayHi = function (name) {
    var msg = "Hola, tu nombre es ";
    retunr saySomething(msg, name);
}

sayHy("Juanma")