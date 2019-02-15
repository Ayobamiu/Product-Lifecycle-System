const Consumer = require('./consumers');



test('check if state changes',() => {
    const consumer = new Consumer();
    expect(consumer.go()).toEqual(true);
})