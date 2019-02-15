const Retailer = require('./retailers');



test('check if state changes',() => {
    const retailer = new Retailer();
    expect(retailer.go()).toEqual(true);
})