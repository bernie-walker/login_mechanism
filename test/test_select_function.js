const selectFunction = require('../src/select_function.js').selectFunction;
const assert = require('assert');

describe("selectFunction", function() { 

  it("should return invalid keyword when no key word is entered", function() { 
    const actual = selectFunction();
    const expected = "invalid keyword";
    assert.strictEqual(actual, expected);
  } );

  it("should allow to login/signup for ", function() {
    const actual = selectFunction("login", "nagendra", "nags123");
    const expected = "login Successful";
    assert.strictEqual(actual, expected);
  })

} );
