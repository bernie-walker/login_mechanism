const fs = require('fs');

const trimLastLine = function() { 
  let fileContent = fs.readFileSync("./src/credentials.txt", "utf8");
  fileContent = fileContent.split("\n");

  fs.writeFileSync("./src/credentials.txt", fileContent.slice(0, -1).join("\n"), "utf8");
}; 

exports.trimLastLine = trimLastLine;
