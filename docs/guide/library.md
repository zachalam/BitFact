## Install
BitFact is a tool that lets you easily fingerprint arbitrary data onto the Ethereum blockchain. This fingerprint (or hash) can later be used to corroborate posession and state of data.

Available in **[🗄️ npm](https://www.npmjs.com/package/bitfact)** and **[🧶 yarn](https://yarnpkg.com/package/bitfact)** flavours.
```
npm i --save bitfact
```
```
yarn add bitfact
```

## Setup
🚗 The only thing you need to drive is an Ethereum `provider` and `privateKey`. 
```javascript
const BitFact = require("bitfact"); // load from npm or yarn
const bitfact = new BitFact({ 
  provider: "https://mainnet.infura.io/v3/37a0db22401bbe211112",
  privateKey: "321d3fa232e55dedee2bd914273f78897f69053b61437c5",
  options: {chain: 'mainnet'}
});
```
*Optional* 2nd Parameter: **chain** can be of value `mainnet` or `ropsten`. If ignored, `mainnet` will be used.

## .stampText()
Fingerprint text or raw data.
```javascript
const textOrData = "Hello World!";
const memo = "this is my memo text";
const receipt = await bitfact.stampText(textOrData, memo);
```

## .stampFile()
Fingerprint a file on your machine.
```javascript
const pathToFile = "./path/to/any.file";
const memo = "description of file";
const receipt = await bitfact.stampFile(pathToFile, memo);
```


## .getByTx()
Get the details of a TX id.
```javascript
const txid = "0xa9fab29a809d3d59660ea9a34353f2574c6ac49ee65af";
const receipt = await bitfact.getByTx(txid);
```

## Receipt
The `receipt` (or response) typically takes 15-30 seconds (Ethereum block time) to produce, stamp, and verify. It may take longer depending on how congested the blockchain is. Once you receive a response it'll contain the following information. **It's good practice to _save_ the `txid` and `hash`.**
```javascript
{
  txid: '0x89ce46371c55e86142611b4e2bd8ef59f642ab24abec041456',
  hash: '7f83b1657ff1fc535dfc2d4b1fa3d677284addd200126d9069',
  meta: {
    info: { chain: 'ropsten' },
    fact: { ... },
    tx: { ... }
  }
}
``` 