## Setup BitFact
🚗 The only thing you need to drive is an Ethereum `provider` and `privateKey`. 
```javascript
const BitFact = require("bitfact"); // load from npm or yarn
const bitfact = new BitFact({ 
  provider: "https://mainnet.infura.io/v3/37a0db22401bbe211112",
  privateKey: "321d3fa232e55dedee2bd914273f78897f69053b61437c5"
}, {chain: 'mainnet'});
```

1. Learn how to get a <a href="/#/guide/providers">provider</a> here.
2. Learn how to get a <a href="/#/guide/privateKeys">private key</a> here.


*Optional* 2nd Parameter: **chain** can be of value `mainnet` or `ropsten`. If ignored, `mainnet` will be used.
