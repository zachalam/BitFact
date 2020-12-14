// NOTE: Update to USE from a package manager instead.
const BitFact = require("../BitFact");
const loadConf = require("./loadConf");
const setup = loadConf({
  provider: "",
  privateKey: "",
  options: { chain: "ropsten" },
});

// verifies a BitFact text
(async () => {
  const bitfact = new BitFact(setup);
  const isStampedText = await bitfact.verifyText(
    "Hello World!",
    "0xefb2678cc4eb62586184d751189357c7ee4adc10dd4be188c8f61705942a25d9"
  );
  console.log("is stamped text? ", Boolean(isStampedText));
})();
