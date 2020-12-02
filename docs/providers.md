## What is a Provider?
Simply put an Ethereum `provider` is a service (exposed by a URL) that allows you to read and write to the Ethereum blockchain. 

### Provider Example
```
https://mainnet.infura.io/v3/40fa81b7179d49a18704556afcbfd704
```

## Get Provider
In this quick tutorial, we'll show you how to obtain a provider (through Infura) so that your BitFact instance can access the Ethereum Blockchain.

Infura provides a generous free tier without requiring a credit card.

1. Create an account with Infura: https://infura.io/register 
2. Once you've setup your account head to the `dashboard` and select `ethereum` from the navigation bar: https://infura.io/dashboard/ethereum
3. Click the `Create New Project` button.
4. Name your project (ie: `bitfact-demo`) and then click `Create`.
5. Finally copy and save the URL generated in the `Keys` section. **This URL is your `provider`.**

<img src="./images/infurakeys.png" alt="Infura Keys" title="Infura Keys" />

## Provider Services
Here's a list of Ethereum providers that we have curated.
- https://infura.io
- https://alchemyapi.io/
