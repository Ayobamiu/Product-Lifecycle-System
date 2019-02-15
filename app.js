const Factory = require('./factory/factory');


function app() {
    let factory = new Factory();
    
    factory.start();
}

app();
