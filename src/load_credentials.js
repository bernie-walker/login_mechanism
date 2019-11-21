const fs = require("fs");

const loadCredentials = function() {
  const credentials = fs.readFileSync("./src/credentials.JSON", "utf8");
  return JSON.parse(credentials);
};

exports.loadCredentials = loadCredentials;
