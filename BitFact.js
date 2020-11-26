const Web3 = require("web3");
const Tx = require("ethereumjs-tx");
const sha256 = require("js-sha256");
const sha256f = require("sha256-file");
const config = require("./config");

class BitFact {
  constructor(options, chain = config.DEFAULT_CHAIN) {
    this.options = options; // ie: { provider: 'https://...' privateKey: '4109c982fa'}
    this.chain = chain; // ie: { chain: "ropsten" }
    this.web3 = new Web3(options.provider);
  }

  async text(text, memo) {
    // Exposed method:
    // BitFact's a piece of text.
    const hash = sha256(text);
    const fact = this.getFact("text", hash, memo);
    const stamp = await this.stamp(fact); // stamp to chain
    return this.formReply(hash, fact, stamp);
  }

  async file(filePath, memo) {
    // Exposed method:
    // BitFact's a file (path).
    const hash = sha256f(filePath);
    const fact = this.getFact("file", hash, memo);
    const stamp = await this.stamp(fact); // stamp to chain.
    return this.formReply(hash, fact, stamp);
  }

  parse(fact) {
    // parse's a bitfact string.
    // fact: BitFact:text2|hash:2c29..9824|memo:this is a memo
    let parsedFact = new Object();
    fact = fact.split("|");
    fact.forEach((aFact) => {
        // split the fact section. ie: BitFact:text2
        const factSect = aFact.split(":");
        parsedFact[factSect[0]] = factSect[1];
    });
    return parsedFact;
  }

  // --------------------------

  formReply(hash, fact, stamp) {
    // returns a nicely formatted response for end user.
    return {
      info: this.chain,
      fact: this.parse(fact),
      hash,
      stamp,
    };
  }

  async stamp(fact) {
    // fact: BitFact:text2|hash:2c29..9824|memo:this is a memo
    let tx = await this.buildTx(fact);
    tx = await this.signTx(tx);
    tx = await this.broadcastTx(tx);
    return tx;
  }

  // --------------------------

  async buildTx(bitFactData) {
    return {
      nonce: this.web3.utils.toHex(await this.getTransactionCount()),
      to: config.BITFACT_ADDR,
      value: this.web3.utils.toHex(this.web3.utils.toWei("0", "ether")),
      gasLimit: this.web3.utils.toHex(40000),
      gasPrice: this.web3.utils.toHex(
        this.web3.utils.toWei(await this.getGasPrice(), "wei")
      ),
      data: this.web3.utils.toHex(bitFactData),
    };
  }

  async signTx(txObj) {
    // Signs a TX object.
    const tx = new Tx.Transaction(txObj, this.chain);
    const pk = Buffer.from(this.options.privateKey, "hex");

    tx.sign(pk);
    return tx.serialize();
  }

  async broadcastTx(serializedTx) {
    serializedTx = "0x" + serializedTx.toString("hex");
    const receipt = await this.web3.eth.sendSignedTransaction(serializedTx);
    return receipt;
  }

  // --------------------------

  async getPublicKey() {
    return await this.web3.eth.accounts.privateKeyToAccount(
      this.options.privateKey.toString()
    ).address;
  }

  async getGasPrice() {
    // returns as wei.
    return await this.web3.eth.getGasPrice();
  }

  async getTransactionCount() {
    // returns the number of TX's from this account.
    let pubKey = await this.getPublicKey();
    const txCount = await this.web3.eth.getTransactionCount(pubKey);
    return txCount;
  }

  getFact(type, hash, memo) {
    // this method formats the bitfact hash.
    // memos cannot have any of the following: "bitfact", "|", or ":".
    memo = memo.toLowerCase();
    memo = memo.replace(/bitfact/g, "");
    memo = memo.replace(/|/g, "");
    memo = memo.replace(/:\s*/g, "");
    return "BitFact:" + type + "|sha256:" + hash + "|memo:" + memo;
  }
}

module.exports = BitFact;
