const getIndividualCreds = function(credentialTable,string) { 
  let credential = string.split("-");
  credentialTable[credential[0]] = credential[1];
  return credentialTable;
}; 

const parseCredentials = function(string) { 
  const credentialArray = string.split("\n");

  return credentialArray.reduce(getIndividualCreds,{});
}; 


exports.parseCredentials = parseCredentials;
