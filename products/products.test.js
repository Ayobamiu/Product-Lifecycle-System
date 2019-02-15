const Product = require('./products');


test('check if state changes',() => {
    const products = new Product();
    expect(products.go()).toEqual(true);
})