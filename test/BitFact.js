const Web3 = require('web3');
const sinon = require('sinon');
const chai = require("chai");
const assert = chai.assert;
const BitFact = require("../BitFact");

// testing bitfact object (with faked data).
const bitfact = new BitFact({
  provider: "https://mainnet.infura.io/v3/37a0db22401bbe211112", // no http requests used in tests
  privateKey: "67ccc16df9e7581ec11e7483c7eba5f2ae937b7ab37db413bad46470165629cf",
});

// -------

describe("BitFact", () => {
  describe("constructor()", () => {
    it("should return an object", () => {
      assert.typeOf(bitfact, "object");
    });
  });
  describe("formReply()", () => {
    it("object should return all 4 keys", async () => {
      const reply = await bitfact.formReply("hash", "fact", "call");
      assert.equal(Object.keys(reply).length, 4);
      assert.include(Object.keys(reply), 'hash');
      assert.include(Object.keys(reply), 'fact');
      assert.include(Object.keys(reply), 'stamp');
      assert.include(Object.keys(reply), 'info');
    });
  });
  describe("getPublicKey()", () => {
    it("should return public key", async () => {
      const testKey = "0x9BDf7a7F7FDF391b6EFD32D16c2594ADE09Ff041";
      sinon.stub(bitfact.web3.eth.accounts, "privateKeyToAccount").returns({address: testKey});
      const publicKey = await bitfact.getPublicKey();
      assert.equal(publicKey, testKey);
    });
  });
  describe("getTransactionCount()", () => {
    it("should return number", async () => {
      sinon.stub(bitfact.web3.eth, "getTransactionCount").returns(20);
      const txCount = await bitfact.getTransactionCount();
      assert.isNumber(txCount);
    });
  });
  describe("getGasPrice()", () => {
    it("should return number", async () => {
      sinon.stub(bitfact.web3.eth, "getGasPrice").returns('100000000');
      const gasPrice = await bitfact.getGasPrice();
      assert.isString(gasPrice);    // gas price is a string.
    }).timeout(5000);
  });
  describe("getFact()", () => {
    const memoDetails = [
      "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
      "hash of 'hello world'",
    ];
    const memo = bitfact.getFact('text',memoDetails[0], memoDetails[1]);
    it("should be a string", () => {
      assert.isString(memo);
    });
    it("should match expected string", () => {
      assert.equal(
        memo,
        "BitFact:text|sha256:" +
          memoDetails[0] +
          "|memo:" +
          memoDetails[1]
      );
    });
  });
  describe("buildTx()", () => {
    it("should return object", async () => {
      const txObject = await bitfact.buildTx();
      assert.isObject(txObject);    // is object
    });
  });
  describe("signTx()", () => {
    it("should return object", async () => {
      const signedTx = await bitfact.signTx({
        blank: true
      });
      assert.equal(typeof signedTx, 'object');    // returns a buffer, if "object" via js but not chai.
    });
  });
  describe("broadcastTx()", () => {
    it("should return object", async () => {
      const signedTx = await bitfact.signTx({
        blank: true
      });
      sinon.stub(bitfact.web3.eth, "sendSignedTransaction").returns({
        transactionHash: '0x60868331cbe9ba5e2f39edccac324646ca4536d'
      });
      const broadcastedTx = await bitfact.broadcastTx(signedTx);

      assert.isObject(broadcastedTx);
    });
  });
});
