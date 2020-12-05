## What is a Private Key?
A `privateKey` is a credential that allows you to interact with an account on the Ethereum blockchain. *You can think of it as a password, as such it's a good idea to treat it as one.*

?> Exercise Caution: BitFact is not a centralized service. We cannot help you recover the privateKey you create if it becomes lost or stolen.
### Example
```
71ec0d821fdb3ed43c95f5acb591caa80bf2d96d206604c68c0e2f29357b4d3b
```

## Get Private Key
In this tutorial, we'll show you how to obtain a private key for Ethereum. This tutorial has two steps: creating the key and then funding the key. Both steps are necessary.

!> The external tools/services in this document have not been audited by BitFact. Exercise extreme caution when storing larger amounts of value.

### Creation
Use the quick or long method to generate your `privateKey`. No matter where you generate your keys, they're valid on any chain. Be sure to make note of your `address` as well for the funding step.
#### Quick (Unsafe)
Use an Ethereum generator online for fast setup & testing.
- Visit https://vanity-eth.tk/. Click `Start Now`, then `Generate`. Click to reveal the private key. NOTE: The text revealed below the address is your private key (be sure to save it).

#### Long (Better)
Run the `createKey.js` example inside the BitFact library. 
```console
$ mkdir bitfact-hello && cd bitfact-hello && npm init
$ npm install --save bitfact
$ node ./node_modules/bitfact/examples/createKey.js
```
```console
{
  address: '0x23a5f2Bccc06a6781BF3f3816EF0b9A31ed176B3',
  privateKey: '0x7aa9d17961c1bfb6279fe5b68007947811d48b2ddce775ce60e566faf44993f2',
  ...
}
```
The example calls the `createKeypair()` method as part of the BitFact library. Each time it's called a new (random) keypair will be generated. This method is syntactic sugar for [web3.eth.accounts.create](https://web3js.readthedocs.io/en/v1.2.11/web3-eth-accounts.html#create).


### Funding
Fund your account depending on whether you want to use the `mainnet` or `testnet`.

!> Do not share your privateKey with funding services. They do not need it. Use the corresponding "address" created in the previous step.
#### Testnet (Free)
- Visit the following link: https://faucet.dimensions.network/. Enter the address you recorded from the last step. Complete the bot challenge and press submit.
  
#### Mainnet (Real)
- Utilize a 3rd party service like Coinbase to purchase and send Ethereum to your recorded address. Steps to do this: https://help.coinbase.com/en/coinbase/trading-and-funding/cryptocurrency-trading-pairs/how-to-send-and-receive-cryptocurrency 

## Service List
- Creation (Mainnet & Testnet Compatible)
  - https://myetherwallet.com

- Funding - Testnet (Free)
  - https://faucet.ropsten.be/
  - https://faucet.dimensions.network/

- Funding - Mainnet (Real)
  - https://coinbase.com
  - https://binance.com
  - https://investvoyager.com
  - https://www.argent.xyz/
