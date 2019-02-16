const fs = require('fs');


const Product = require('../products/products');
const Retailer = require('../retailer/retailers');
const Consumer = require('../consumers/consumers');
const Recycler = require('../recycler/recyclers');

class Factory {
    constructor(product, stage) {
        this.product = product;
        this._currentStage = stage === 'Producer' ? new Product(this) : (stage === 'Retailer' ? 
        new Retailer(this) : (stage === 'Consumer' ? new Consumer(this) : new Recycler(this)));
    }


    nextStage(stage) {
        this.currentStage = stage;
        this.currentStage.go(this.product);
        return true;
    }

    start() {
        this._currentStage.go(this.product);
        
        return true
    }

    // write(content, path) {
    //     fs.writeFile(path, content, (err) => {  
    //         // throws an error, you could also catch it here
    //         if (err) throw err;
        
    //         // success case, the file was saved
    //         console.log('Lyric saved!');
            
    //     });
    // }

}

module.exports = Factory;