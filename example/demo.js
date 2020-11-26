const BitFact = require("../BitFact");
// ^ IMPORTANT IMPORTANT IMPORTANT
// If using in your project, change this require to use from NPM or YARN.

// setup bitfact.
// replace with your own PROVIDER and PRIVATEKEY.
let bitfact = new BitFact(
  {
    provider:
      "https://eth-ropsten.alchemyapi.io/v2/01GesjZxWhg-KMfDuLH_-aUOmV-bRBaf",
    privateKey:
      "67ccc16df9e7581ec11e7483c7eba5f2ae937b7ab37db413bad46470165629cf",
  },
  { chain: "ropsten" }
);

let stampFile = async () => {
  const receipt = await bitfact.file("../readme/logo.png", "this is the memo");
  console.log(receipt);
};

let stampText = async () => {
  const receipt = await bitfact.text("Hello World!", "this is the memo");
  console.log(receipt);
};

let main = async () => {
  //await stampFile();
  await stampText();
};

main();

/* Example Response (receipt):

{
  info: { chain: 'ropsten' },
  fact: {
    BitFact: 'file',
    sha256: 'd2fb204b925188a2ef7baef2ce35814411539ac4240571be35e1d5b5ec3fd4c6',
    memo: 'this is the memo'
  },
  hash: 'd2fb204b925188a2ef7baef2ce35814411539ac4240571be35e1d5b5ec3fd4c6',
  stamp: {
    blockHash: '0x811085fee3442c11fd761f8fb80b196618123992484009fa686420889fd47454',
    blockNumber: 9146812,
    contractAddress: null,
    cumulativeGasUsed: 123770,
    from: '0x9bdf7a7f7fdf391b6efd32d16c2594ade09ff041',
    gasUsed: 22696,
    logs: [],
    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    status: true,
    to: '0xface74f0d85cf2fc5a7cd4f55258493c0535f89b',
    transactionHash: '0x8978f838f6e3f10fb87478c5e6d2cdcddc3b451b39e09d1bba0974d9e4086a96',
    transactionIndex: 4
  }
}

*/
