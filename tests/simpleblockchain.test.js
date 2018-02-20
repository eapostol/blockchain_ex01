const SimpleBlockChain = require('./../simpleblockchain');

const SimpleBlock = require('./../simpleblock');

describe('Simple BlockChain', () => {
    let simpleBlockChain, sampleGenesisBlock;
    beforeEach(() => {
        simpleBlockChain = new SimpleBlockChain();
        sampleGenesisBlock = SimpleBlock.genesisBlock();
    });

    it('BlockChains should begin with a genesis block', () => {
        // genesis blocks have the same properties, but since we are using timestamps
        // they could differ at the time of creation, and using toEqual() would cause
        // the current test to fail.
        // Instead, we can test for the object keys (and also, if we wanted to be more
        // specific, test the values. I only tested the timeStamp to be at the same day
        // (broad stroke) solution.


        // TODO: move testing of timeStamp to separate test
        let testBlock = simpleBlockChain.chainOfBlocks[0];
        let testBlockDate = new Date(testBlock.timeStamp);
        let sampleGenesisBlockDate = new Date(sampleGenesisBlock.timeStamp);

        expect (testBlockDate).toEqual(sampleGenesisBlockDate);

        expect(Object.keys(sampleGenesisBlock).sort()).toEqual(Object.keys(testBlock).sort());


    });

    it('BlockChains should be able to add a new block', () => {
        const data = 'foo';
        simpleBlockChain.addBlockToChain(data);
        expect(simpleBlockChain.chainOfBlocks[simpleBlockChain.chainOfBlocks.length-1].data).toEqual(data);
    });
});