// Write a function 'isVowel' that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

describe("function isVowel that ", function() {
    it("should exist", function(){
        expect( isVowel ).toBeDefined();
     });   
    it("it should return a boolan value", function(){
        var result = isVowel();

        expect( typeof(result) ).toBe("boolean");
    });
    it("should return true when called isVowel('a')", function(){
        var result = isVowel('a');

        expect( result.toBe(true));
    }); 

});