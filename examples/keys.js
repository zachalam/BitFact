// load keys.
module.exports = (secrets) => {
  let secretsToUse;
  try {
    secretsToUse = require("./secrets");
  } catch (e) {
    secretsToUse = secrets;
  }
  return secretsToUse;
};
