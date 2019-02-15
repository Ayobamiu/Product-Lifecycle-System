const Products = require('../products/products');

class Factory {
    constructor() {
        this._currentStage = new Products(this);
    }

    readFile() {
        // require('fs').readFileSync('../Product-Input', 'utf8').split('\n').forEach(line => {
        //     let data = line.replace(/[^\w\s]/gm, '').replace(/\s\s+/gm, ' ');
        //     console.log(data);
        // });
        return true;
    }

    nextStage(stage) {
        // this.currentStage = stage;
        // this.currentStage.go();
        return true;
    }

    start() {
        this._currentStage.go();
        this.readFile();
        return true
    }

}

module.exports = Factory;