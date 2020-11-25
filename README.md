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
We're available in both `🗄️ npm` and `🧶 yarn` flavors.
```javascript
npm i --save bitfact
```
```javascript
yarn add bitfact
```

## Powerful Features
- 🖐️ Fingerprint any data with 2 easy calls.
- ♾️ Permanently stored on the Ethereum blockchain.
- 😎 Use with: mainnet (live), ropsten (testnet), & beaconchain (eth2).


## Setup & Use BitFact.
🚗 The only thing you need to drive is an Ethereum `provider` and `privateKey`. 
```javascript
const bitfact = new BitFact({ 
  provider: "https://mainnet.infura.io/v3/37a0db22401bbe211112",
  privateKey: "321d3fa232e55dedee2bd914273f78897f69053b61437c5"
});
```

#### ❇️ Snippet #1: Fingerprint text or raw data.
```javascript
const textOrData = "Hello World!";
const memo = "this is my memo text";
const receipt = await bitfact.text(textOrData, memo);
// receipt.tx => 0x76b88571f0aae7c369122beff25461f724cdca9b6404224
// receipt.hash => 7f83b1657ff1fd4b1fa3d677284addd200126d9069
```

#### ❇️ Snippet #2: Fingerprint file contents.
```javascript
const pathToFile = "./path/to/any.file";
const memo = "description of file";
const receipt = await bitfact.file(pathToFile, memo);
// receipt.tx => 0xaccb1eefa63fe9365fe277ceaefabf06eb05ce5b83a7f28
// receipt.hash => 07123e1f482356ccbbc0b8fcd6282c49d37c9c1abc
```
