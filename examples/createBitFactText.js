// NOTE: Update to USE from a package manager instead.
const BitFact = require("../BitFact");
const loadConf = require("./loadConf");
const setup = loadConf({
  provider: "",
  privateKey: "",
  options: { chain: "ropsten" },
});

// creates a BitFact
(async () => {
  const bitfact = new BitFact(setup);
  const receipt = await bitfact.stampText("Hello World!", "hello world memo");
  console.log(receipt);
})();
