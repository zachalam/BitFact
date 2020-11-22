const chai = require("chai");
var assert = chai.assert;

const BitFact = require("../BitFact");
const secrets = require("../secrets");

// testing bitfact object.
const bitfact = new BitFact("ethereum", {
  provider: secrets.provider,
  privateKey: secrets.privateKey,
});

describe("BitFact", () => {
  describe("constructor()", () => {
    it("should return an object", () => {
      assert.typeOf(bitfact, "object");
    });
  });
  describe("getPublicKey()", () => {
    it("should return matching public key", async () => {
      const publicKey = await bitfact.getPublicKey();
      assert.equal(publicKey, secrets.publicKey);
    });
  });
  describe("getTransactionCount()", () => {
    it("should return number", async () => {
      const txCount = await bitfact.getTransactionCount();
      assert.isNumber(txCount);
    }).timeout(5000);
  });
  describe("getGasPrice()", () => {
    it("should return number", async () => {
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
        "BitFact:text|hash:" +
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
    }).timeout(5000);
  });
  describe("signTx()", () => {
    it("should return object", async () => {
      const signedTx = await bitfact.signTx({
        blank: true
      });
      assert.equal(typeof signedTx, 'object');    // returns a buffer, if "object" via js but not chai.
    }).timeout(5000);
  });
});
