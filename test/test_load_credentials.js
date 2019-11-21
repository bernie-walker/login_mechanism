const loadCredentials = require("../src/load_credentials.js").loadCredentials;
const fs = require("fs");
const assert = require("assert");

describe("loadCredentials", function() {
  it("should load the data from the given file", function() {
    const actual = loadCredentials();
    const expected = JSON.parse(
      fs.readFileSync("./src/credentials.JSON", "utf8")
    );
    assert.deepStrictEqual(actual, expected);
  });
});
