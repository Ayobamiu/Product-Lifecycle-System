const fs = require('fs');

const Factory = require('./factory/factory');





class Run {
    start() {
        fs.readFileSync('./Product-Input', 'utf8').split('\n').forEach(line => {
            let data = line.replace(/[^\w\s]/gm, '').replace(/\s\s+/gm, ' ').split(' ');
            const len = data.length;
            if (len === 3) {
                const factory = new Factory(data[0] + ' ' + data[1], data[2]);
                factory.start();
            } else if (len == 2) {
                const factory = new Factory(data[0] + ' ' + data[1], 'Product');
                factory.start();
            }
            
        });
        
    }
}

const run = new Run();
run.start()







// function app() {
//     let factory = new Factory();
    
//     factory.start();
// }



// app();
