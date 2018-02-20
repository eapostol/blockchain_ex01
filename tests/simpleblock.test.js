const SimpleBlock = require('./../simpleblock');


// describe: describe the object being tested
// it: should describe what the object does - takes a function that executes the test
// beforeEach: allows execution of it's code prior to each test. can be used to create
// an instance of an object.
// expect: takes an object or some form of data, and you can then chain some methods
// that will help evaluate what the object/data should be. (what should be 'expected')
// with expect, we can 'chain' these methods.
// toEqual:

describe('Block', () =>{

    // declare sample information to use for testing
    let sampleData = '', previousBlock = null, testBlock = null;

    beforeEach( () => {
        // create some fake data
        sampleData = 'fake-data';
        previousBlock = SimpleBlock.genesisBlock(); // use a first block for testing
        // create a sample block to use for the tests
        testBlock = SimpleBlock.mineBlock(previousBlock,sampleData);
    } );

    let TestBlockDataEqualsSampleData = () => {
        // the testBlock's data should equal the sample data
        expect(testBlock.data).toEqual(sampleData);
    };

    let NewBlockOldHashIsPrevBlockNewHash = () =>{
        // the current block's last hash value should equal the previous block's hash value
        expect(testBlock.lastHash).toEqual(previousBlock.hash);
    };

    // assertion tests
    it('should set the `data` property in the block to what user wants to store', TestBlockDataEqualsSampleData);

    it('should set the `lastHash` property in the block to the hash of the previous block', NewBlockOldHashIsPrevBlockNewHash  );




});
