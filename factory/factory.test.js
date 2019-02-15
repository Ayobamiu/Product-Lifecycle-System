const Factory = require('./factory');

test('check if state changes',() => {
    const factory = new Factory();
    expect(factory.readFile()).toEqual(true);
})

test('check if state changes',() => {
    const factory = new Factory();
    expect(factory.nextStage()).toEqual(true);
})

test('check if state changes',() => {
    const factory = new Factory();
    expect(factory.start()).toEqual(true);
})

