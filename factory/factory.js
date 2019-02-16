const Product = require('../products/products');
const Retailer = require('../retailer/retailers');
const Consumer = require('../consumers/consumers');
const Recycler = require('../recycler/recyclers');

class Factory {
    constructor(product, stage) {
        this.product = product
        this._currentStage = stage === 'Product' ? new Product(this) : (stage === 'Retailer' ? 
        new Retailer(this) : (stage === 'Consumer' ? new Consumer(this) : new Recycler(this)));
    }


    nextStage(stage) {
        this.currentStage = stage;
        // this.currentStage.go();
        return true;
    }

    start() {
       
        this._currentStage.go(this.product);
        return true
    }

}

module.exports = Factory;