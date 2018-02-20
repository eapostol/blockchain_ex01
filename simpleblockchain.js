/*
* SimpleBlockChain is a class that has the characteristics of the blockchain
* it starts with a genesis block with its initial payload (data), hash, timestamp
* and it should maintain an array of successive blocks, each block carrying the
* previous block's hash, it's own new hash, and data
* question: should the data be the same in each block?
* */


// TODO: Convert these to import statements
const SimpleBlock = require('./simpleblock');

class SimpleBlockChain {
    constructor() {
        // add the genesis block to the initial chainOfBlocks
        this.chainOfBlocks = [SimpleBlock.genesisBlock()]; // maybe call it a chain in the future
    }

    addBlockToChain(dataToStore) {
        // TODO: clean up this code
        // get the last known block
        const lastKnownBlock = this.chainOfBlocks[this.chainOfBlocks.length-1];
        // create the new block
        const newBlock = SimpleBlock.mineBlock(lastKnownBlock,dataToStore);
        // push the new block
        this.chainOfBlocks.push(newBlock);
        // return the new block
        return newBlock;
    }
}

module.exports = SimpleBlockChain;