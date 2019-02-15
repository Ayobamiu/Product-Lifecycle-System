class Consumer {
    constructor(stage) {
        this.stage = stage;
    }

    go(product, newStage) {
        console.log('----- hehhehehheheh ----');
        // this.stage.nextStage(new newStage(this.stage));
        return true;
    }
}


module.exports = Consumer;