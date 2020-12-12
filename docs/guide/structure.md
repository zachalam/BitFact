## Anatomy
At it's fundamental level a `BitFact` is simply a JSON stringified object encompassed in a `BitFact()` wrapper. At the moment, there is no requirement for a BitFact object to implement certain attributes. Generally though it contains the following attributes:

- The `algo` contains the type of hashing algorithm used in the `hash`.
- The `hash` is an arbitrary data digest created by `algo`.
- The `type` is generally "text" or "file". 
- The `memo` can be anything, but is helpful to describe the contents.

## Raw Data
```
BitFact({
    "algo":"sha256",
    "hash":"7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069",
    "type":"text",
    "memo":"hello world memo"
})
```

## Implementation
A BitFact string can be easily implemented in any general purpose programming language.
```javascript
return "BitFact(" + JSON.stringify(input) + ")"
```

## Example
You can view an example of a BitFact TX on the Ethereum (testnet) blockchain at the following link. Be sure to expand transactions details and look for `Input Data`. It's helpful to view it as `UTF-8`.
https://ropsten.etherscan.io/tx/0x00188a9f1b03aafaa0bb38f7188dc5d0afc7ba8190336ea9352c9b1823e0fce9

