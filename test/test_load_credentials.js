const loadCredentials = require('../src/load_credentials.js').loadCredentials;
const fs = require('fs');
const assert = require('assert');

describe("loadCredentials", function() { 
  it("should load the data from the given file", function() { 
    const actual = loadCredentials(); 
    const expected = fs.readFileSync("./src/credentials.txt", "utf8");
    assert.strictEqual(actual, expected);
  } );
} );
