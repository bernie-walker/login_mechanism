const loadCredentials = require('./load_credentials.js').loadCredentials;
const parseCredentials = require('./parse_credentials.js').parseCredentials;

const loginFunction = function(username, password) { 
  const credentialTable = parseCredentials(loadCredentials());
  let returnMessage = "wrong username or password!";

  if((credentialTable[username] != undefined) && (credentialTable[username] === password)) {
    returnMessage = "login Successful"; 
  }

  return returnMessage;
}; 

exports.loginFunction = loginFunction;
