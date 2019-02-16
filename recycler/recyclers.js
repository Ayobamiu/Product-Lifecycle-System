const fs = require('fs');


class Recycler {
    constructor(stage) {
        this.stage = stage;
    }

    go(product) {
        const content = `Recycled --- ${product} \n`;
        fs.appendFileSync("input.txt", content);
        console.log(content);

        return true;
    }
}


module.exports = Recycler;

