const SimpleBlock = require('./simpleblock');

// const simpleBlock = new SimpleBlock('foo','bar','zoo','baz');

// test creation of a simple block
// console.log(simpleBlock.toString());

// test creation of a genesis block. static method -
// console.log(SimpleBlock.genesisBlock().toString());

const bc = SimpleBlock.mineBlock(SimpleBlock.genesisBlock(),'new data');
console.log('new block: ', bc);

