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

## verifyFile()
Verifies that a file was stamped on chain.

**Parameters:**
1. `string` - filePath, the path to a file.
2. `string` - txid, an ethereum TX id.
**Returns:** `boolean` - true or false - if stamped.

```javascript
const pathToFile = "./path/to/any.file";
const txid = "0xefb2678cc4eb62586184d751189357c7ee4adc10dd4be188c8f61705942a25d9";
const isStampedFile = await bitfact.verifyText(pathToFile,txid);
// false
```

## verifyText()
Verifies that text or data was stamped on chain.

**Parameters:**
1. `string` - rawText, raw data or text.
2. `string` - txid, an ethereum TX id.
**Returns:** `boolean` - true or false - if stamped.

```javascript
const textOrData = "Hello World!";
const txid = "0xefb2678cc4eb62586184d751189357c7ee4adc10dd4be188c8f61705942a25d9";
const isStampedText = await bitfact.verifyText(textOrData,txid);
// true
```