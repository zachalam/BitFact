// load keys.
module.exports = (otherConf) => {
  let confToUse;
  try {
    confToUse = require("./bitfact.json");
  } catch (e) {
    confToUse = otherConf;
  }
  return confToUse;
};
