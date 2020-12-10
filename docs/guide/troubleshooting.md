## Common Errors
This page documents a list of common errors that you may run into (and their possible solutions) when using the BitFact library. 

### Invalid Sender
```javascript
UnhandledPromiseRejectionWarning: Error: Returned error: invalid sender
    at Object.ErrorResponse (/BitFact/node_modules/web3-core-helpers/lib/errors.js:28:19)
```

This error occurse when the privateKey for a given account does not have any Ethereum in their respective account.

- Verify that the account specified by `privateKey` has enough Ethereum.
- Verify the { chain: } parameter is being specified in the BitFact constructor.