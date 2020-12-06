## getByTx()
Get the details of a stamp by means of a ethereum transaction id (txid).

**Parameters:**
1. `string` - txid, Ethereum transaction id.
**Returns:** `object` - receipt object.

```javascript
const txid = "0xa9fab29a809d3d59660ea9a34353f2574c6ac49ee65af";
const receipt = await bitfact.getByTx(txid);
```