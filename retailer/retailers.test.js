const Retailer = require('./retailers');
const Factory = require('../factory/factory');



test('check if state changes',() => {
    const retailer = new Retailer(new Factory('Cowbell', 'Consumer'));
    expect(retailer.go('Cowbell')).toEqual(true);
})