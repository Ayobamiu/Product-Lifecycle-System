const Product = require('./products');


test('check if state changes',() => {
    const product = new Product();
    expect(product.go()).toEqual(true);
})