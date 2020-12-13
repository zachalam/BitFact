// load keys.
module.exports = (secrets) => {
  let secretsToUse;
  try {
    secretsToUse = require("./secrets.json");
  } catch (e) {
    secretsToUse = secrets;
  }
  return secretsToUse;
};
