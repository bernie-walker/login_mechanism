const loadCredentials = require("./load_credentials.js").loadCredentials;
const fs = require("fs");

const signupFunction = function(username, password) {
  const credentials = loadCredentials();
  const existingUsernames = Object.keys(credentials);

  if (username == undefined || password == undefined) {
    return "Invalid username";
  }

  if (existingUsernames.includes(username)) {
    return "username already exists";
  }

  credentials[username] = password;
  fs.writeFileSync(
    "./src/credentials.JSON",
    JSON.stringify(credentials),
    "utf8"
  );
  return "signed up successfully";
};

exports.signupFunction = signupFunction;
