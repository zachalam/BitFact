## What is BitFact?
At it's core, **BitFact is a data integrity tool**. It considerably streamlines the process of: 
1. `hashing` arbitrary data -and-
2. `timestamping` on a non-corruptible ledger (Ethereum blockchain).

?> Periodically timestamping data can build trust, help with audits, and provide better organization.


BitFact is well documented, runs absent of any centralized service, and is open source. The Apache 2.0 licensed codebase can be found here: https://github.com/zachalam/BitFact 

## What is Data Hashing?
You may have heard of the term "hashing", or "fingerprinting" before. These terms describe the process of taking any size data, running it through a hash function, and outputing a predictable & fixed-size value. Different pieces of data (even with small changes) will output different results. 

<img src="./images/hash.png" alt="Infura Keys" width="70%" title="Infura Keys" />

Further reading: https://en.wikipedia.org/wiki/Hash_function

## What's a Timestamp?
Timestmaping is the process of recording data so that the time of it's existence can be verified. BitFact uses the public Ethereum blockchain to record timestamps of your data hashes. The blockchain acts as an independent (and non-corruptable) verifier.

Further reading: https://en.wikipedia.org/wiki/Timestamping_(computing)

