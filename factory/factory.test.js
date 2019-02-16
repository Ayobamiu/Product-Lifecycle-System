const Factory = require('./factory');



test('check if state changes',() => {
    const factory = new Factory();
    expect(factory.nextStage()).toEqual(true);
})

test('check if state changes',() => {
    const factory = new Factory('', 'Product');
    expect(factory.start()).toEqual(true);
})

test('check if state changes',() => {
    const factory = new Factory('', 'Retailer');
    expect(factory.start()).toEqual(true);
})

test('check if state changes',() => {
    const factory = new Factory('', 'Consumer');
    expect(factory.start()).toEqual(true);
})

test('check if state changes',() => {
    const factory = new Factory('', 'Recycler');
    expect(factory.start()).toEqual(true);
})

