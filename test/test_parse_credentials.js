const parseCredentials = require('../src/parse_credentials.js').parseCredentials;
const assert = require('assert');

describe("parseCredentials", function() { 

  it("should format the incoming string in the credentials format", function() { 
    const actual = parseCredentials("a-123\nb-456");
    const expected = {"a": "123","b": "456"};
    assert.deepStrictEqual(actual, expected);
  } ); 
} );
