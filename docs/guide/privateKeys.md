## What's a Private Key?
A `privateKey` is a credential that allows you to interact with an account on the Ethereum blockchain. *You can think of it as a password, as such it's a good idea to treat it as one.*

?> Exercise Caution: BitFact is not a centralized service. We cannot help you recover the privateKey you create if it becomes lost or stolen.
### Example
```
0xea656c47e3c9bcfaf42433a4e8bf71e3ec567c85baa86e31fa2df5a0ef804bb2
```
You can provide a private key with or without the leading `0x`.

## Get Private Key
In this tutorial, we'll show you how to obtain a private key for Ethereum. This tutorial has two steps: creating the key and then funding the key. Both steps are necessary.

!> The external tools/services in this document have not been audited by BitFact. Exercise extreme caution when storing larger amounts of value.

### Creation
You can quickly generate keys using the command line tool. Simply run the following command after you've installed bitfact. No matter where you generate Ethereum keys, they're valid on any ETH chain. Be sure to make note of your `address` as well for the funding step.

```console
$ bitfact keypair
```
```console
⠋ Generating keys..
Address: 0xfA7460413D3592C96c867642C13De64a223f0994
Private Key: 0xdcb3535eac64fb0ed569d2442f60ec0b7a42629af810bd883f0e704109646d65
```
The example calls the `createKeypair()` method as part of the BitFact library. Each time it's called a new (random) keypair will be generated. This is syntactic sugar for [web3.eth.accounts.create](https://web3js.readthedocs.io/en/v1.2.11/web3-eth-accounts.html#create).


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
