const loadCredentials = require("./load_credentials.js").loadCredentials;

const loginFunction = function(username, password) {
  const credentialTable = loadCredentials();
  let returnMessage = "wrong username or password!";

  if (
    credentialTable[username] != undefined &&
    credentialTable[username] === password
  ) {
    returnMessage = "login Successful";
  }

  return returnMessage;
};

exports.loginFunction = loginFunction;
