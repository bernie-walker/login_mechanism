const selectFunction = require('./src/select_function.js').selectFunction;

const main = function() { 
  const funcsel = process.argv[2];
  const usin = process.argv[3];
  const pswd = process.argv[4];

  console.log(selectFunction(funcsel, usin, pswd));
}; 

main();
