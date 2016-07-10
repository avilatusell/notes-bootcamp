// Write a function 'isVowel' that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

describe("function rockPaperScissors that ", function() {
    //1
    it("should exist", function(){
        expect( rockPaperScissors ).toBeDefined();
    });
    //2
    it("should return string", function(){
        var result = rockPaperScissors("a");
        expect( typeof(result) ).toBe("string");
    });
    //=> hem de testejar com si fos estàtic i després testejar el que pot donar random. 
// haurém de canviar les entrades amb 2 entrades com inicialment
    //3
    it("should return string 'ROCK' when fight with 'SCISSORS'", function(){
        var result = rockPaperScissors("ROCK");
        expect(result).toBe("ROCK wins!");
    });
    //4
    it("should return string 'ROCK' when fight with 'PAPER'", function(){
        var result = rockPaperScissors("ROCK");
        expect(result).toBe("PAPER wins!");
    });
    //5
    it("should return string 'PAPER' when fight with 'ROCK'", function(){
        var result = rockPaperScissors("PAPER");
        expect(result).toBe("PAPER wins!");
    });
    //6
    it("should return string 'PAPER' when fight with 'SCISSORS'", function(){
        var result = rockPaperScissors("PAPER");
        expect(result).toBe("SCISSORS wins!");
    });
    //7
    it("should return string 'SCISSORS' when fight with 'PAPER'", function(){
        var result = rockPaperScissors("SCISSORS");
        expect(result).toBe("SCISSORS wins!");
    });
    //8
    it("should return string 'SCISSORS' when fight with 'ROCK'", function(){
        var result = rockPaperScissors("SCISSORS");
        expect(result).toBe("ROCK wins!");
    });
    //9
    it("should return string 'TIE' when fight with the same choice 'ROCK' and 'ROCK'", function(){
        var result = rockPaperScissors("ROCK");
        expect(result).toBe("tie!");
    });
    /*//10
    it("should return string 'ROCK' when computer choice randomly generated is a number between '1' and '33' both included", function(){
        var result = computerChoice();
        expect(result).toBe("ROCK");
    });
    //11
    it("should return string 'PAPER' when computer choice randomly generated is a number between '34' and '66' both included", function(){
        var result = computerChoice();
        expect(result).toBe("PAPER");
    });
     //12
    it("should return string 'SCISSORS' when computer choice randomly generated is a number between '67' and '100' both included", function(){
        var result = computerChoice();
        expect(result).toBe("SCISSORS");
    });
    */
     
});





// test PARA COMPROBAR EL RANDOM. TENEMOS QUE VER QUE CHOICE 2 ES O BIEN ROCK O SCISSORS O PAPER
"PAPER vs SCISSORS => SCISSORS wins!"
var result = "PAPER vs SCISSORS => SCISSORS wins!" // ESTE ES EL RESULTADO QUE DEBERÍA DAR. LO 
var piecesResult = result.split('')
(piecesResult[2] === "SCISSORS" ||piecesResult[2] ===  "PAPER" || piecesResult[2] === "ROCK" )//==> SI ES TRUE
// expected result to be TRUE al test


