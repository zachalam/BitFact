const BitFact = require("./BitFact");

// tests for now.

// eth address: 0x9BDf7a7F7FDF391b6EFD32D16c2594ADE09Ff041
let bitfact = new BitFact("ethereum", {
  provider:
    "https://eth-ropsten.alchemyapi.io/v2/01GesjZxWhg-KMfDuLH_-aUOmV-bRBaf",
  privateKey:
    "67ccc16df9e7581ec11e7483c7eba5f2ae937b7ab37db413bad46470165629cf",
});

let main = async () => {
  let resp = await bitfact.file("./readme/logo.png", "this is the memo");
  console.log(resp);
};

main();
