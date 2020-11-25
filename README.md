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
```

#### ❇️ Snippet #2: Fingerprint file contents.
```javascript
const pathToFile = "./path/to/any.file";
const memo = "description of file";
const receipt = await bitfact.file(pathToFile, memo);
```

#### 🧾 Sample Response (Receipt).
The `receipt` (or response) typically takes ~15 seconds (Ethereum block time) to produce, stamp, and verify. It may take longer depending on how congested the blockchain is. Once you receive a response it'll contain the following information.
```javascript
{
  info: { chain: 'ropsten' },
  fact: 'BitFact:file|sha256:d15ec3fd4c6|memo:this is memo',
  hash: 'd2fb204b925188a9ac4240571be35e1d5b5ec3fd4c6',
  stamp: {
    blockHash: '0x400938bdc4c4eddf90ff70de20e37a25f77d66282',
    blockNumber: 9137050,
    contractAddress: null,
    cumulativeGasUsed: 322932,
    from: '0x9bdf7a7f7fdf391b6efd32d16c2594ade09ff041',
    gasUsed: 22696,
    logs: [],
    logsBloom: '0x000000000000000000000000000000000',
    status: true,
    to: '0xface74f0d85cf2fc5a7cd4f55258493c0535f89b',
    transactionHash: '0x64f87ea0a936ca0c65dc093c8dd143191ba',
    transactionIndex: 10
  }
}
```
