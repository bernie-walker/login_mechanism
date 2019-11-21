const login = require('./login_function.js').loginFunction;
const signup = require('./signup_function.js').signupFunction;

const selectFunction = function(selector, username, password) { 
  const selection = {login: login, signup: signup};

  if((selector == undefined) || ((selector != "login") && (selector != "signup"))) {
    return "invalid keyword";
  }

  return selection[selector](username, password);
}; 


exports.selectFunction = selectFunction;
