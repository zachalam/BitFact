// NOTE: Update to USE from a package manager instead.
const BitFact = require("../BitFact");
const loadConf = require("./loadConf");
const setup = loadConf({
  provider: "",
  privateKey: "",
  options: { chain: "ropsten" },
});

// creates an Ethereum keypair
(async () => {
  console.log(await new BitFact(setup).createKeypair());
})();
