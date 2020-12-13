## Structure
The `receipt` object is an object returned by many methods of the BitFact library. It contains important information about the data recorded on blockchain. At the very least the receipt object contains a `txid` and `hash`. A `meta` sub-object may be given but the information contained inside in not guaranteeed.

## Example
```javascript
{
  txid: '0x00188a9f1b03aafaa0bb38f7188dc5d0afc7ba8190336ea9352c9b1823e0fce9',
  hash: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
  meta: {
    info: { chain: 'ropsten' },
    fact: {
      algo: 'sha256',
      hash: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
      type: 'text',
      memo: 'hello world memo'
    },
    tx: {
      blockHash: '0x54faf738ed12cd0303585875fc145340293f890410dc4848c9fcd9d386c56bee',
      blockNumber: 9230680,
      contractAddress: null,
      cumulativeGasUsed: 2389412,
      from: '0x9bdf7a7f7fdf391b6efd32d16c2594ade09ff041',
      gasUsed: 23240,
      logs: [],
      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      status: true,
      to: '0x00000000000000000000000000000000000000bf',
      transactionHash: '0x00188a9f1b03aafaa0bb38f7188dc5d0afc7ba8190336ea9352c9b1823e0fce9',
      transactionIndex: 23
    }
  }
}
```