const Product = require('./products');
const Factory = require('../factory/factory');


test('check if state changes',() => {
    const product = new Product(new Factory('Tin Tomatoes', 'Retailer'));
    expect(product.go('Tin Tomatoes')).toEqual(true);
})