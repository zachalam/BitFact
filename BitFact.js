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
    const fact = this.buildFact("text", hash, memo);
    const stamp = await this.stamp(fact); // stamp to chain
    return this.formReply(fact, stamp);
  }

  async file(filePath, memo) {
    // Exposed method:
    // BitFact's a file (path).
    const hash = sha256f(filePath);
    const fact = this.buildFact("file", hash, memo);
    const stamp = await this.stamp(fact); // stamp to chain.
    return this.formReply(fact, stamp);
  }

  // --------------------------

  formReply(factString, tx) {
    // returns a nicely formatted response for lib user.
    const fact = this.parseFact(factString)
    return {
      txid: tx.transactionHash,
      hash: fact.hash,
      meta: {
          info: this.chain, fact, tx
      }
    };
  }

  async stamp(fact) {
    // fact: BitFact({"algo":"sha256","hash":"b94e2efcde9","type":"text","memo":"mymemo"})
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

  // --------------------------

  parseFact(fact) {
    // BitFact(algo:sha256|hash:dabfac484|type:file|memo:testing..)
    // this method turns a "bitfact string" into an object.
    // algo:sha256|hash:dabfac484|type:file|memo:testing.."
    const factString = fact.substring(8, fact.length - 1);

    // {algo: "sha256", hash: "b94e2efcde9", type: "text", memo: "mymemo"}
    return JSON.parse(factString);
  }

  buildFact(type, hash, memo) {
    // this method turns "object data" into a "bitfact string".
    const input = {
      algo: "sha256",
      hash,
      type,
      memo,
    };

    // BitFact({"algo":"sha256","hash":"b94e2efcde9","type":"text","memo":"mymemo"})
    return "BitFact(" + JSON.stringify(input) + ")";
  }
}

module.exports = BitFact;
