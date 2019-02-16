const Retailer = require('../retailer/retailers');

class Product {
    constructor(stage) {
        this.stage = stage;
    }

    go(product) {
        console.log(`Product ----- hehhehehheheh ----${product}`);
        this.stage.nextStage(new Retailer(this.stage));
        return true;
    }
}


module.exports = Product;


