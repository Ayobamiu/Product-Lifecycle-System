const Product = require('../products/products')

class Recycler {
    constructor(stage) {
        this.stage = stage;
    }

    go(product) {
        console.log(`Recycler ----- hehhehehheheh ----${product}`);
        return true;
    }
}


module.exports = Recycler;

