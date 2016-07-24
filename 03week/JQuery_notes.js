$('a').on(click, function (event)) {
event.preventDefault();
$(this).css(“background”,”yellow”);
})


$('a').on('click', function (event)) {
event.preventDefault();
var currentUrl = this.href;
if(currentUrl.indexOf("skylabcodrs") !=-1) {
	$(this).css(“background”,”yellow”);
}
})



$('a').on('click,' function (event)) {
event.preventDefault();
var $closestDiv = $(this).closest("div");
$closestDiv.css("border","2px solid green")
console.log($closestDiv.attr("class"))
})


$("body").on("click", function(event) {
	var element = element.target;
	console.log (element)
	// console.log ($(element).hasClass() ? "TIENE CLASE" : "NO TIENE NINGUNA CLASE")

})


$('a').on('click', function (event)) {
event.preventDefault();
event.stopPropagation();
var currentUrl = this.href;
if(currentUrl.indexOf("skylabcodrs") !=-1) {
	$(this).css(“background”,”yellow”);
}
})






$("body").on("click", function(event) {
	var element = element.target;
	console.log (element)

// con este de abajo creamos un click en un a. Es una forma más elegante que la de arriba.
	$("body").on("click","a", function(event) {
	event.preventDefault;
	console.log (event.target ===this)

// con este de abajo creamos tantos links como a hay
	$("body a").on("click", function(event) {
	event.preventDefault;
	console.log (event.target ===this)



