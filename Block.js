const sha256 = require('crypto-js/sha256');

module.exports = class Block{

  constructor(index = 0, previousHash = null, data = 'Genesis Block'){
    this.index = index;
    this.data = data;
    this.timestamp = new Date();
    this.previousHash = previousHash;

    this.hash = this.generateHash();
  }

  generateHash(){
    return sha256(JSON.stringify(this.index) + JSON.stringify(this.previousHash) + JSON.stringify(this.data) + JSON.stringify(this.timestamp)).toString();
  }
}