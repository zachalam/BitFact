// NOTE: Update to USE from a package manager instead.
const BitFact = require("../BitFact");
const keys = require("./keys");
const theKeys = keys({ provider: "", privateKey: "" });

console.log(theKeys);

// creates a BitFact
(async () => {
  const bitfact = new BitFact(theKeys);
  const receipt = await bitfact.stampText("Hello World!", "hello world memo");
  console.log(receipt);
})();
