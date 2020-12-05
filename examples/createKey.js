// NOTE: Update to USE from a package manager instead.
const BitFact = require("../BitFact");

// creates an Ethereum keypair
(async () => {
  console.log(
    await new BitFact({ provider: "", privateKey: "" }).createKeypair()
  );
})();
