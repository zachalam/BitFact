#### Sample Response (Receipt).
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

<br />
