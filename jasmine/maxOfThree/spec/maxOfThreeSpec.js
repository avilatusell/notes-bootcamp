
describe("function maxOfThree that ", function() {

  it("should exist", function(){
    expect( maxOfThree ).toBeDefined();
  });

  
  it("should return a number", function() {
    var result = maxOfThree();
    expect( typeof(result) ).toBe("number");
  });

  it("should return 9 as maxOfThree", function() {
    var result = maxOfThree(9,2,1);
    expect( result ).toBe(9);
  });

   it("should return 9 as maxOfThree", function() {
    var result = maxOfThree(9,1,2);
    expect( result ).toBe(9);
  });










});

