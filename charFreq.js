charFreq.js

Write a function charFreq() that takes a string and builds a frequency listing 
of the characters contained in it. Represent the frequency listing as a Javascript 
object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").



function charFreq(str) {
		var pos = str.indexOf(str.charAt(0));
		var count = 0;
		while (pos !== -1) {
  			count++;
  			pos = str.indexOf(str.charAt(i), pos + 1);
		}
		console.log(count);
}



/* ejemplo en Mozilla sobre el indexOf():
var str = 'To be, or not to be, that is the question.';
var count = 0;
var pos = str.indexOf('e');

while (pos !== -1) {
  count++;
  pos = str.indexOf('e', pos + 1);
}
*/