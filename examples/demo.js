// If using in your project, change to use from NPM or YARN.
// v IMPORTANT IMPORTANT IMPORTANT
const BitFact = require("../BitFact");
// ^ IMPORTANT IMPORTANT IMPORTANT
// If using in your project, change to use from NPM or YARN.

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

let main = async () => {
  try {
    console.log("BitFact a piece of text...");
    const response = await bitfact.stampText(
      "Hello World!",
      "this is the memo"
    );
    console.log(response);
  } catch (e) {
    console.log("could not store bitfact.. check provider status.");
    console.log(e);
  }

  console.log("-----------------------");

  try {
    console.log("Later. Retrieve a BitFact...");
    const later = await bitfact.getByTx(
      "0xa9fab29a809d3d59653b40c3c0654631f5c060ea9a34353f2574c6ac49ee65af"
    );
    console.log(later);
  } catch (e) {
    console.log("could not retrieve bitfact.. check provider status.");
    console.log(e);
  }
};

main();

/* Example Response (receipt):

{
  txid: '0xa9fab29a809d3d59653b40c3c0654631f5c060ea9a34353f2574c6ac49ee65af',
  hash: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
  meta: {
    info: { chain: 'ropsten' },
    fact: {
      algo: 'sha256',
      hash: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
      type: 'text',
      memo: 'this is the memo'
    },
    tx: {
      hash: '0xa9fab29a809d3d59653b40c3c0654631f5c060ea9a34353f2574c6ac49ee65af',
      blockHash: '0x8ff7da954604c5f5d0647372be666b11b9540d4dba3e3c3fd01ccab5184e7365',
      blockNumber: 9154202,
      from: '0x9BDf7a7F7FDF391b6EFD32D16c2594ADE09Ff041',
      gas: 40000,
      gasPrice: '2019849217',
      input: '0x42697446616374287b22616c676f223a22736861323536222c2268617368223a2237663833623136353766663166633533623932646331383134386131643635646663326434623166613364363737323834616464643230303132366439303639222c2274797065223a2274657874222c226d656d6f223a227468697320697320746865206d656d6f227d29',
      nonce: 62,
      r: '0xd4ff8fd1bae8b518891d5a1c15ef840f396b94e7eae023b58adc9879184ef8a3',
      s: '0x6bf8c32b5e72ee09530c963787d866f8bd5c819a7f2b66b766573b0c92e005c3',
      to: '0xface74F0D85CF2FC5a7cd4f55258493c0535F89B',
      transactionIndex: 1,
      v: '0x29',
      value: '0'
    }
  }
}

*/
