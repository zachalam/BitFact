// NOTE: Update to USE from a package manager instead.
const BitFact = require("../BitFact");
const keys = require("./keys");
const theKeys = keys({ provider: "", privateKey: "" });

// creates an Ethereum keypair
(async () => {
  console.log(await new BitFact(theKeys).createKeypair());
})();