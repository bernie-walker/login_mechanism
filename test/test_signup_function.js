const signupFunction = require('../src/signup_function.js').signupFunction;
const assert = require('assert');
const trimLastLine = require('../src/trim_last_line.js').trimLastLine;

describe("signupFucntion", function() { 

  it("should inform that username is invalid when no input given", function() { 
    const actual = signupFunction(); 
    const expected = "Invalid username";
    assert.strictEqual(actual, expected); 
  } ); 

  it("should inform if username already exists", function() {
    const actual = signupFunction("nagendra", "password"); 
    const expected = "username already exists";
    assert.strictEqual(actual, expected);
  } ); 

  it("should affirm if signup is successful", function() { 
    const actual = signupFunction("santhosh", "santhu123"); 
    const expected = "signed up successfully";
    assert.strictEqual(actual, expected);
    trimLastLine();
  } );

} );
