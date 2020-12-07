const Web3 = require("web3");
const sinon = require("sinon");
const chai = require("chai");
const assert = chai.assert;
const BitFact = require("../BitFact");

// testing bitfact object (with faked data).
const bitfact = new BitFact({
  provider: "https://mainnet.infura.io/v3/37a0db22401bbe211112", // no http requests used in tests
  privateKey:
    "67ccc16df9e7581ec11e7483c7eba5f2ae937b7ab37db413bad46470165629cf",
});

// -------

describe("BitFact (core)", () => {
  describe("constructor()", () => {
    it("should return an object", () => {
      assert.typeOf(bitfact, "object");
    });
  });
  describe("stampText()", async () => {
    it("should return an object", async () => {
      sinon.stub(bitfact, "stamp").returns({
        transactionHash: "0x60868331cbe9ba5e2f39edccac324646ca4536d",
      });
      const receipt = await bitfact.stampText("hello", "memo");
      assert.typeOf(receipt, "object");
    });
    it("keys should have correct keys", async () => {
      const receipt = await bitfact.stampText("sample text", "my memo");
      assert.include(Object.keys(receipt), "txid");
      assert.include(Object.keys(receipt), "hash");
      assert.include(Object.keys(receipt), "meta");
    });
  });
  describe("stampFile()", async () => {
    it("should return an object", async () => {
      const receipt = await bitfact.stampFile(__filename, "memo #1");
      assert.typeOf(receipt, "object");
    });
    it("keys should have correct keys", async () => {
      const receipt = await bitfact.stampFile(__filename, "memo #2");
      assert.include(Object.keys(receipt), "txid");
      assert.include(Object.keys(receipt), "hash");
      assert.include(Object.keys(receipt), "meta");
    });
  });
});
