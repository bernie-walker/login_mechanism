const fs = require('fs');

const loadCredentials = function() { 
  return fs.readFileSync("./src/credentials.txt", "utf8");
}; 

exports.loadCredentials = loadCredentials;
