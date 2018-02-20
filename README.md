# Simple BlockChain and CryptoCurrency Example

February 16 2018

This repository is my recent exploration into describing how blockchain works.

The template for this project is a Node 9.x / Express 4.x setup .



Note: When this example was created there was (literally) last minute
changes being made to the regex-not package that affected the compilation
of this project (see https://github.com/parcel-bundler/parcel/issues/858
and [this commit](https://github.com/jonschlinkert/regex-not/commit/335ef057744980b211a048f6b287b4690a9bc29f) )

![a001_regex_not](assets/images/a001_regex_not.png)

![a002_regex_not](assets/images/a002_regex_not.png)

After running

npm install

I had to manually correct the index.js file in the regex-not package to get everything running. It may be fixed by the time you look at this repo (see the change you have to make in the first image)

---

Encryption is done using the [crypto-JS](https://github.com/brix/crypto-js) library.

---
JS Testing is implemented using [Jest](https://facebook.github.io/jest/) .


---
# TODOS:

add a 'Tree' (Merkle?) implementation .

In [cryptography](https://en.wikipedia.org/wiki/Cryptography "Cryptography") and [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), a **hash tree** or **Merkle tree** is a [tree](https://en.wikipedia.org/wiki/Tree_(data_structure) "Tree (data structure)") in which every leaf node is labelled with the hash of a data block and every non-leaf node is labelled with the [cryptographic hash](https://en.wikipedia.org/wiki/Cryptographic_hash_function "Cryptographic hash function") of the labels of its child nodes. Hash trees allow efficient and secure verification of the contents of large data structures. Hash trees are a generalization of [hash lists](https://en.wikipedia.org/wiki/Hash_list "Hash list") and [hash chains](https://en.wikipedia.org/wiki/Hash_chain "Hash chain").

Demonstrating that a leaf node is a part of a given binary hash tree requires computing a number of hashes proportional to the [logarithm](https://en.wikipedia.org/wiki/Logarithm "Logarithm") of the number of leaf nodes of the tree;^[\[1\]](https://en.wikipedia.org/wiki/Merkle_tree#cite_note-1)^ this contrasts with hash lists, where the number is proportional to the number of leaf nodes itself.






