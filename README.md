<p align="center">
<img src="https://raw.githubusercontent.com/zachalam/BitFact/master/readme/logo.png" alt="BitFact logo" title="BitFact" align="center" height="140" />
<br />
A delightful JS lib to fingerprint (prove) your data, text, & files on the Ethereum blockchain.
<br /><br />
<img src="https://img.shields.io/github/issues/zachalam/BitFact" />
<img src="https://img.shields.io/github/license/zachalam/BitFact" />
<img src="https://img.shields.io/npm/v/bitfact" />
<img src="https://img.shields.io/bundlephobia/minzip/bitfact" />
<br /><br />
</p>


## Install BitFact.
Available in `🗄️ npm` and `🧶 yarn` flavours.
```
npm i --save bitfact
```
<sup>https://www.npmjs.com/package/bitfact</sup>
```
yarn add bitfact
```
<sup>https://yarnpkg.com/package/bitfact</sup>

## Powerful Features
<img src="https://github.com/zachalam/BitFact/blob/master/readme/about.gif?raw=true" alt="BitFact animation" title="BitFact About" align="center" />
<br /> 

- 🖐️ Fingerprint all types of data with 2 easy calls.
- ♾️ Permanent hash on the Ethereum blockchain.
- ⛽ Tiny gas fees (~21,000) - the same as sending ether.
- 😎 Use with: mainnet (live), ropsten (testnet), & beaconchain (eth2).


## Use BitFact.
🚗 The only thing you need to drive is an Ethereum `provider` and `privateKey`. 
```javascript
const bitfact = new BitFact({ 
  provider: "https://mainnet.infura.io/v3/37a0db22401bbe211112",
  privateKey: "321d3fa232e55dedee2bd914273f78897f69053b61437c5"
}, {chain: 'mainnet'});
```
*Optional* 2nd Parameter: **chain** can be of value `mainnet` or `ropsten`. If ignored, `mainnet` will be used.

#### ❇️ Snippet #1: Fingerprint text or raw data.
```javascript
const textOrData = "Hello World!";
const memo = "this is my memo text";
const receipt = await bitfact.text(textOrData, memo);
```

#### ❇️ Snippet #2: Fingerprint file contents.
```javascript
const pathToFile = "./path/to/any.file";
const memo = "description of file";
const receipt = await bitfact.file(pathToFile, memo);
```

#### 🧾 Sample Response (Receipt).
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

## Verify BitFact.
The `txid` you receive when you fingerprint data can be used as a reference in the future.

#### ❇️ Snippet #3: Fingerprint file contents.
```javascript
const txid = "0xa9fab29a809d3d59660ea9a34353f2574c6ac49ee65af";
const receipt = await bitfact.getByTx(txid);
```
#### Manually Verify.
You can use any independent Ethereum Block Explorer to retrieve your fingerprint. Here's an example of one: https://ropsten.etherscan.io/tx/0xa9fab29a809d3d59653b40c3c0654631f5c060ea9a34353f2574c6ac49ee65af. See `Input Data` section and ensure you view input data as `UTF-8`.
