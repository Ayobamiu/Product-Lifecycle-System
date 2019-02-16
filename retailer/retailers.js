const fs = require('fs');

const Consumer = require('../consumers/consumers');

class Retailer {
    constructor(stage) {
        this.stage = stage;
    }

    go(product, newStage) {
        const content = `Retailed --- ${product} \n`;
        fs.appendFileSync("input.txt", content);
        console.log(content);
            
        this.stage.nextStage(new Consumer(this.stage));
        return true;
    }
}


module.exports = Retailer;