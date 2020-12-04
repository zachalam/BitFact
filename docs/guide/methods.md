## stampText()
Fingerprint text or raw data.

**Parameters:**
1. `string` - rawText, raw data or text.
2. `string` - memo, a string with info about the data.
**Returns:** `object` - receipt object.

```javascript
const textOrData = "Hello World!";
const memo = "this is my memo text";
const receipt = await bitfact.stampText(textOrData, memo);
```

## stampFile()
Fingerprint a file on your machine.

**Parameters:**
1. `string` - filePath, the path to a file.
2. `string` - memo, a string with info about the data.
**Returns:** `object` - receipt object.

```javascript
const pathToFile = "./path/to/any.file";
const memo = "description of file";
const receipt = await bitfact.stampFile(pathToFile, memo);
```


## getByTx()
Get the details of a stamp by means of a ethereum transaction id (txid).

**Parameters:**
1. `string` - txid, Ethereum transaction id.
**Returns:** `object` - receipt object.

```javascript
const txid = "0xa9fab29a809d3d59660ea9a34353f2574c6ac49ee65af";
const receipt = await bitfact.getByTx(txid);
```