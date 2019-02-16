const Recycler = require('../recycler/recyclers');

class Consumer {
    constructor(stage) {
        this.stage = stage;
    }

    go(product) {
        console.log(`Consumer ----- hehhehehheheh ----${product}`);
        this.stage.nextStage(new Recycler(this.stage));
        return true;
    }
}


module.exports = Consumer;