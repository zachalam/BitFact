## Let's Start
In this 60-second guide we'll show you how to go from zero to timestamped data. 

?> Before starting, you'll want to ensure that you have the latest version of `node` installed on your machine: https://nodejs.org/en/download/ 

## 1. Install
Install the BitFact package.
```
npm install -g bitfact
```

## 2. Run Setup
Run the setup command to create a `bitfact.json` file in your current working directory. This file will hold sensitive information about your **provider** and **privateKey**.
```
bitfact setup
```
?> **Need help setting up?**
Learn how to get a <a href="/#/guide/providers">provider here</a> or <a href="/#/guide/privateKeys">private key here</a>.

## 3. Stamp File
Once setup is complete, find a file on your machine to timestamp. Supply it as the `-f` argument to `bitfact stamp`.
```
bitfact stamp -f hello_world.txt
```

## 4. Verify
Confirm your hash on a blockchain explorer, like https://etherscan.io by looking up the transaction ID.
```
⠙ writing to blockchain..
Success! Stamped on Blockchain:
Hash: c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4
Txid: 0xea0066695a382d997efe230b63ad45882c4bc19a91767d7951ee5dcda327a3df
```
