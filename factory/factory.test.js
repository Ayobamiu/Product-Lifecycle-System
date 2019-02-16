const Factory = require('./factory');
const Producer = require('../products/products');



test('check if state changes',() => {
    const factory = new Factory('Rice', 'Producer');
    expect(factory.start()).toEqual(true);
})

test('check if state changes',() => {
    const factory = new Factory('Milk', 'Retailer');
    expect(factory.start()).toEqual(true);
})

test('check if state changes',() => {
    const factory = new Factory('Hair cream', 'Consumer');
    expect(factory.start()).toEqual(true);
})

test('check if state changes',() => {
    const factory = new Factory('Condoms', 'Recycler');
    expect(factory.start()).toEqual(true);
})


