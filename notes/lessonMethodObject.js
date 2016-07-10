
lessonMethodObject.js

var hero = {
  name: 'Rafaelo',
  sayName: function() {
    return this.name; // "this" es una palabra  especial. Apunta al objeto que contiene el método "hero".    
  }
}
>>> hero.sayName();
"Rafaelo"





var hero = {
  name: 'Rafaelo',
  sayName: function() {
    return hero.name;
  }
}
>>> hero.sayName();
"Rafaelo"


// como crear OBJETOS con Funciones constructoras => devuelven objeto cuando las llamamos con new
// se suele poner la 1a letra en mayúscula
// funció inicial, standard
function createObject () {
	return {
		name : "juanma";
		city: "barcelona";
	}
}

// funció amb funcions constructores
function createObject () {
	this.name = "juanma";
	this.city =  "barcelona";
}

// assignem amb new. Ha d'estar associat amb This
var a = new createObject()
var a = new createObject()

// cridem 
a.name // Retorna "juanma"
b.name // retorna "barcelona"

// MANERAS DE CREAR OBJETO

// 1) Literal
// 2) Con objeto vacío y definimos
// 3) funciones
function createObject () {
	return {
		name: myName,
		place: myPlace
	}
}
// 4) funciones con parámetros
function createObject (name, place) {
	return {
		name: myName,
		place: myPlace
	}
}
