const Blockchain = require('./Blockchain');

const blockchain = new Blockchain();

blockchain.addBlock({from: 'a', to: 'b', amount: 1});
blockchain.addBlock({from: 'a', to: 'c', amount: 2});
blockchain.addBlock({from: 'b', to: 'a', amount: 3});

console.log(blockchain);

console.log(blockchain.isValid());