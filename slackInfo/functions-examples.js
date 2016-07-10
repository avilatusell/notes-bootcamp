function sayHi( name, displayMode ) {
	var adjective = "awesome";
	return displayMode( "Hello " + name + ", you're " + moreAdjective + " " + adjective);
} 

function showConsole(msg) {
	console.log (msg);
}

function showAlert(msg) {
	alert(msg);
}


sayHi("juanma", showConsole)
sayHi("juanma", showAlert)
sayHi("juanma", function(msg) { return "I SAY: "+msg;})


