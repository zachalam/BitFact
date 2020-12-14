<p align="center">
<img src="https://raw.githubusercontent.com/zachalam/BitFact/master/readme/logo.png" alt="BitFact logo" title="BitFact" align="center" height="120" />
<br /><br />
A delightful JS lib to prove your data, text, & files. 
<br />
BitFact fingerprints data and then etches it on the Ethereum Blockchain.
<br /><br />
<img src="https://img.shields.io/github/issues/zachalam/BitFact" />
<img src="https://img.shields.io/github/license/zachalam/BitFact" />
<img src="https://img.shields.io/npm/v/bitfact" />
<img src="https://img.shields.io/bundlephobia/minzip/bitfact" />
<br /><br />
</p>

---

## Install
Available in **[🗄️ npm](https://www.npmjs.com/package/bitfact)** and **[🧶 yarn](https://yarnpkg.com/package/bitfact)** flavours.
```
npm install -g bitfact
```
```
yarn add bitfact
```

## Setup
🚗 The only thing you need to drive is an Ethereum `provider` and `privateKey`. 
```
$ bitfact setup
```
```
✔ Enter a provider URL. … https://eth.infura.io/v2/01Grse32
✔ Enter a private key (pre-funded with ETH). … 67ccc16df9e7581ec11e7b413bad46470165629cf
✔ Which network are you using? › Ethereum (mainnet)
Config file added to current directory, "bitfact.json"
```


## Write to Chain
```
$ bitfact stamp -f hello_world.txt -m "this is my hello world memo"
```
```
⠓ confirming..
Success! Stamped on Blockchain:
Hash: c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4
Txid: 0xbae7f1714416e10861497c0837966bf8e933ab8d63026e0871d969ebed391cf5
```

## Documentation
The code is well tested and fully documented. Pull requests to docs are welcome.
- **Documentation Site: https://docs.bitfact.io/**
- Project Repo: The documentation can also be viewed in the `docs/guides` folder on the repository.

## Features
- 🖐️ Fingerprint any data with 2 easy calls. [What's a fingerprint?](https://en.wikipedia.org/wiki/Fingerprint_(computing))
- ♾️ Permanent hash etched on the Ethereum blockchain.
- ⛽ Tiny gas fees (~21,000) - the same as sending ether.
- 😎 Use with: mainnet (live), ropsten (testnet), & beaconchain (eth2).

## Use Programatically
📜 You can also import `bitfact` as a module in your own project.
```javascript
const BitFact = require("bitfact"); // load from npm or yarn
const bitfact = new BitFact({ 
  provider: "https://mainnet.infura.io/v3/37a0db22401bbe211112",
  privateKey: "321d3fa232e55dedee2bd914273f78897f69053b61437c5",
  options: {chain: 'mainnet'}
});

const receipt = await bitfact.stampText("Hello World!", "this is my memo");
console.log(receipt);

```

BitFact | Crafted in Las Vegas (don't gamble with your data) 🎰
