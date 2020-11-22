<p align="center">
<img src="https://raw.githubusercontent.com/zachalam/BitFact/master/readme/logo.png" alt="BitFact logo" title="BitFact" align="center" height="140" />
<br />
A Javascript library to fingerprint (prove) your data, text, &amp; files on the Ethereum blockchain.
<br /><br />
</p>


### Setup BitFact.
```
let bitfact = new BitFact({ 
  provider: "https://mainnet.infura.io/v3/37a0db22401bbe211112",
  privateKey: "321d3fa232e55dedee2bd914273f78897f69053b61437c5"
});
```

### Snippet #1: Fingerprint text or raw data.
```
const textOrData = "hello World";
const memo = "this is my memo text";
const receipt = await bitfact.text(textOrData, memo);
// tx hash => 0x76b88571f0aae7c369122beff25461f724cdca9b6404224
```

### Snippet #2: Fingerprint file contents.
```
const pathToFile = "./path/to/file.raw";
const memo = "description of file";
const receipt = await bitfact.file(pathToFile, memo);
// tx hash => 0x76b88571f0aae7c369122beff25461f724cdca9b6404224
```
