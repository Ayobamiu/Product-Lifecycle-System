const Consumer = require('../consumers/consumers');

class Retailer {
    constructor(stage) {
        this.stage = stage;
    }

    go(product, newStage) {
        console.log(`Retailer ----- hehhehehheheh ---- ${product}`);
        this.stage.nextStage(new Consumer(this.stage));
        return true;
    }
}


module.exports = Retailer;