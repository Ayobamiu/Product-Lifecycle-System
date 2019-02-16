const Consumer = require('./consumers');
const Factory = require('../factory/factory');



test('check if state changes',() => {
    const consumer = new Consumer(new Factory('Rice', 'Producer'));
    expect(consumer.go('Rice')).toEqual(true);
})