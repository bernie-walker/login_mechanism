const loadCredentials = require('./load_credentials.js').loadCredentials;
const parseCredentials = require('./parse_credentials.js').parseCredentials;
const fs = require('fs');

const signupFunction = function(username, password) { 
  const existingUsernames = Object.keys(parseCredentials(loadCredentials()));

  if((username == undefined) || (password == undefined)) { 
    return "Invalid username";
  }

  if(existingUsernames.includes(username)) {
    return "username already exists";
  }

  const credentialString = "\n" + username + "-" + password;
  fs.appendFileSync("./src/credentials.txt", credentialString, "utf8");
  return "signed up successfully";

}; 

exports.signupFunction = signupFunction;
