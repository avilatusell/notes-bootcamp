var oData = {
	name : "juanma",
	showName : function(event) {   // es un método
		event.preventDefault()
		console.log ( "showName..." )
		console.log ( "---" + this.name  + "---" )
	}
}

$("body").on("click", "a", oData.showName )


var oData = {
	name : "juanma",
	showName : function(event) {
		event.preventDefault()
		console.log ( )
		
	}
}
$("body").on("click", "a", oData.showName ) //==> el this apunta a "a" (apunta al elemento que provoca el evento)
$("body").on("click", "a", oData.showName.bind(oData) ) //==> el this apunta al objeto Odata

oData.showName.call({name: "leo"}) //==> cambia el nombe leo.
oData.showName.bind({name: "leo"}) // ==> devuelve una función que tiene un this fijo, me va a dar igual el contexto en que se ejecute, siempre será el mismo.



//extra-example
$("body").on("click", "a", handlerClick )
function handlerClick(event) {
	console.log (link);
}