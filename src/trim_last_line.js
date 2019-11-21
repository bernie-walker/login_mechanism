const fs = require("fs");

trimLastLine = function() {
  let fileContent = fs.readFileSync("./src/credentials.JSON", "utf8");
  fileContent = fileContent
    .split(",")
    .slice(0, -1)
    .join(",")
    .concat("}");

  fs.writeFileSync("./src/credentials.JSON", fileContent, "utf8");
};

exports.trimLastLine = trimLastLine;
