## Stamping Files
The following is a code sample of how to:
1. Initialize a BitFact Object, text, and memo.
2. Create a hash of a `file` and write it to the Ethereum blockchain.

## Code Sample
```javascript
const BitFact = require("bitfact");

const bitfact = new BitFact({
    provider: "https://eth.alchemyapi.io/v2/01sjZxWhg",
    privateKey: "67ccc16df9e7581ecb7ab13bad46470165629cf",
});

const main = async () => {
  try {
    const myFile = "/path/to.file";
    const myMemo = "this is my memo";
    const response = await bitfact.stampFile(myFile,myMemo);
    console.log(response);
  } catch (e) {
    // error
    console.log("Could not create BitFact.. check provider status.");
    console.log(e);
  }
};

main();
```