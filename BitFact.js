const Web3 = require("web3");
const Tx = require("ethereumjs-tx");
const sha256 = require("js-sha256");
const sha256f = require("sha256-file");
const config = require("./config");

class BitFact {
  constructor(setup) {
    /* setup example
    {
      "provider": "https://eth-ropsten.alchemyapi.io/v2/01GesjZxWhg-KMfDuLH_-aUOmV-bRBaf",
      "privateKey": "67ccc16df9e7581ec11e7483c7eba5f2ae937b7ab37db413bad46470165629cf",
      "options": { "chain": "ropsten" }
    }
    */
    this.privateKey = setup.privateKey;
    this.options = setup.options ? setup.options : config.DEFAULT_OPTIONS; // ie: { chain: "ropsten" }
    this.web3 = new Web3(setup.provider);
  }

  async stampText(text, memo) {
    // Exposed method:
    // BitFact's a piece of text.
    const hash = sha256(text);
    const fact = this.buildFact("text", hash, memo);
    const stamp = await this.stamp(fact); // stamp to chain
    return this.formReply(fact, stamp);
  }

  async stampFile(filePath, memo) {
    // Exposed method:
    // BitFact's a file (path).
    const hash = sha256f(filePath);
    const fact = this.buildFact("file", hash, memo);
    const stamp = await this.stamp(fact); // stamp to chain.
    return this.formReply(fact, stamp);
  }

  async verifyText(text, txid) {
    // Exposed method:
    // Checks the bitfact at txid, for matching text.
    const receipt = await this.getByTx(txid);
    return Boolean(receipt.hash === sha256(text));
  }

  async verifyFile(filePath, txid) {
    // Exposed method:
    // Checks the bitfact at txid, for matching text.
    const receipt = await this.getByTx(txid);
    return Boolean(receipt.hash === sha256f(filePath));
  }

  // --------------------------

  async getByTx(hash) {
    // Gets a bitfact by hash.
    const txObj = await this.web3.eth.getTransaction(hash);
    const { input } = txObj; // input contains hex version of bitfact.
    const factString = this.web3.utils.hexToUtf8(input);
    return this.formReply(factString, txObj);
  }

  formReply(factString, tx) {
    // returns a nicely formatted response for lib user.
    const fact = this.parseFact(factString);
    // txid might be either "transactionhash" or simply "hash"
    const txid = tx.transactionHash ? tx.transactionHash : tx.hash;
    return {
      txid,
      hash: fact.hash,
      meta: {
        info: this.options,
        fact,
        tx,
      },
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
    const tx = new Tx.Transaction(txObj, this.options);
    let pkb = this.getKeyBuffer();
    tx.sign(pkb);
    return tx.serialize();
  }

  async broadcastTx(serializedTx) {
    serializedTx = "0x" + serializedTx.toString("hex");
    const receipt = await this.web3.eth.sendSignedTransaction(serializedTx);
    return receipt;
  }

  // --------------------------

  getKeyBuffer() {
    let pk = this.privateKey;
    if (this.web3.utils.isHexStrict(this.privateKey)) {
      // leading hex provided. remove 0x.
      pk = pk.substring(2);
    }
    return Buffer.from(pk, "hex");
  }

  async createKeypair() {
    // returns a random new keypair.
    return await this.web3.eth.accounts.create(this.web3.utils.randomHex(32));
  }

  async getPublicKey() {
    return await this.web3.eth.accounts.privateKeyToAccount(
      this.privateKey.toString()
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
