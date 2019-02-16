const fs = require('fs');

const Recycler = require('../recycler/recyclers');

class Consumer {
    constructor(stage) {
        this.stage = stage;
    }

    go(product) {
        const content = `Consumed --- ${product} \n`;
        fs.appendFileSync("input.txt", content);
        console.log(content);
          
        this.stage.nextStage(new Recycler(this.stage));
        return true;
    }

}


module.exports = Consumer;