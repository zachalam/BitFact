## Setup BitFact
🚗 The only thing you need to drive with BitFact is an Ethereum `provider` and `privateKey`. 
```javascript
const BitFact = require("bitfact"); // load from npm or yarn
const bitfact = new BitFact({ 
  provider: "https://mainnet.infura.io/v3/37a0db22401bbe211112",
  privateKey: "321d3fa232e55dedee2bd914273f78897f69053b61437c5",
  options: {chain: 'mainnet'}
});
```

*Optional* value: **chain** can be of value `mainnet` or `ropsten`. If ignored, `mainnet` will be used.

?> **Need help initializing the class?**
Learn how to get a <a href="/#/guide/providers">provider here</a> or <a href="/#/guide/privateKeys">private key here</a>.
