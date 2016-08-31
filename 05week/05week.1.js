function LexicallyBound() {}
LexicallyBound.prototype.getFunction = function () {
	
	function returnFunction () {
		return LexicallyBound(); 
	}
	return returnFunction;
	 
}