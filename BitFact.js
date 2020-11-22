const Web3 = require("web3");
const Tx = require("ethereumjs-tx");
const sha256 = require("js-sha256");
const config = require("./config");

class BitFact {
  constructor(service, options) {
    this.service = service; // ie: ethereum.
    this.options = options; // { provider: 'https://...' privateKey: '4109c982fa'}
    this.web3 = new Web3(options.provider);
  }

  async text(text, memo) {
    // Exposed method: 
    // BitFact's a piece of text.
    const hash = sha256(text);
    const fact = this.getFact('text',hash,memo);
    return await this.stamp(fact);
  }

  async file(file, memo) {
    // Exposed method: 
    // BitFact's a file (path).
  }

  // --------------------------

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
      gasPrice: this.web3.utils.toHex(this.web3.utils.toWei(await this.getGasPrice(), "wei")),
      data: this.web3.utils.toHex(bitFactData),
    };
  }

  async signTx(txObj) {
    // Signs a TX object.
    const tx = new Tx.Transaction(txObj, { chain: "ropsten" });
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
    return "BitFact:" + type + "|hash:" + hash + "|memo:" + memo;
  }
}

module.exports = BitFact;
