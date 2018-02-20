/*
* requirements for a block:
* a block in a blockchain requires a
* timeStamp
* lastHash
* data - the data stored in the block.
*
* */

class SimpleBlock{

    constructor(timeStamp,lastHash, hash, data){
        this.timeStamp = timeStamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }
    /*
    * genesisBlock() creates the initial block in the blockchain
    * return a new instance of -this- (SimpleBlock) class
    * this is a -keyword- representing the class itself
    * add some default values to the genesisBlock during its creation
    * */
    static genesisBlock() {
        console.log('Genesis Block');
        // timeStamp: can be anything
        // lastHash: can be anything, since its the first block (likely, null)
        // hash: will be the newly created incoming hash
        // data: empty array. will be a collection of values that are needed.

        return new this( new Date(),'','00000-00000-00000-00000-00001',[]);
    }

    /*
    * mineBlock() meets the requirements of creating a new block and adding it to the
    * chain. We will require
    * previousBlock - the previous block in the chain
    * newData - the new data for this block
    * */
    static mineBlock(previousBlock, newData){
        const timeStamp = Date.now();
        const lastHash = previousBlock.hash;
        const hash = 'TODO0-CREATE-ANEW0-HASH';
        return new this(timeStamp,lastHash,hash,newData);
    }

    // generic string fn
    toString(){
        // TODO: optimize return statement
        // limit the hash and lastHash to 20 characters for a demo.
        return `' SimpleBlock Instance '
        Timestamp : ${this.timeStamp}
        Last Hash : ${this.lastHash.substring(0, 10)}
        Hash : ${this.hash.substring(0, 10)}
        Data: ${this.data}`;
    }
}

module.exports = SimpleBlock;