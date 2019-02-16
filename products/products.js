const fs = require('fs');

const Retailer = require('../retailer/retailers');

class Product {
    constructor(stage) {
        this.stage = stage;
    }

    go(product) {
        const content = `Produced --- ${product} \n`;
        fs.appendFileSync("input.txt", content);
        console.log(content);
    
        this.stage.nextStage(new Retailer(this.stage));
        return true;
    }

}


module.exports = Product;


