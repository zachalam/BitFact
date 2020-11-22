<p align="center">
<img src="https://raw.githubusercontent.com/zachalam/BitFact/master/readme/logo.png" alt="BitFact logo" title="BitFact" align="center" height="140" />
<br />
A Javascript library to fingerprint (prove) your data, text, &amp; files on the Ethereum blockchain.
<br /><br />
</p>


### Setup BitFact.
```
let bitfact = new BitFact({ 
  provider: "https://mainnet.infura.io/v3/37a0db22656d47b4bf4e401bbe211112",
  privateKey: "321d3fa232e55dedee2bd914273f7a6bd5f827c86e68897f69061f53b61437c5"
});
```

### Snippet #1: Fingerprint text or raw data.
```
let receipt = await bitfact.text("hello world", "this is my memo text");
// => 0x76b88571f0aae7c369107fabfa2e2f22beff25461f42a748724cdca9b6404224
```

### Snippet #2: Fingerprint file contnents.
```
let receipt = await bitfact.file("./path/to/file", "description of file");
// => 0x6778ad9aacb300f1ed3ac63cf3cb0961b573cdfe918102b8cfffd8799ba6a6b4
```
