## stampText()
Fingerprint text or raw data.
```javascript
stampText(string rawText, string memoText)
```
```javascript
const textOrData = "Hello World!";
const memo = "this is my memo text";
const receipt = await bitfact.stampText(textOrData, memo);
```

## stampFile()
Fingerprint a file on your machine.
```javascript
stampFile(string filePath, string memoText)
```
```javascript
const pathToFile = "./path/to/any.file";
const memo = "description of file";
const receipt = await bitfact.stampFile(pathToFile, memo);
```


## getByTx()
Get the details of a stamp by means of a ethereum transaction id (txid).
```javascript
getByTx(string txId)
```
```javascript
const txid = "0xa9fab29a809d3d59660ea9a34353f2574c6ac49ee65af";
const receipt = await bitfact.getByTx(txid);
```