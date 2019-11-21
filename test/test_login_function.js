const loginFunction = require('../src/login_function.js').loginFunction;
const assert = require('assert');

describe("loginFunction", function() {  

  it("should display error message when there is no credentials", function() { 
    const actual = loginFunction(); 
    const expected = "wrong username or password!";
    assert.strictEqual(actual, expected);
  } ); 

  it("should display error message when the username is wrong", function() { 
    const actual = loginFunction("wrong", "password");
    const expected = "wrong username or password!";
    assert.strictEqual(actual, expected);
  } );

  it("shold display login successful message for right credentials", function() { 
    const actual = loginFunction("nagendra", "nags123");
    const expected = "login Successful";
    assert.strictEqual(actual, expected);
  } );
} );

