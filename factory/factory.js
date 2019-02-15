const Products = require('../products/products');

class Factory {
    constructor() {
        this.currentStage = new Products(this);
    }

    nextStage(stage) {
        // this.currentStage = stage;
        // this.currentStage.go();
        return true;
    }

    start() {
        this.currentStage.go();
        return true
    }
}

module.exports = Factory;