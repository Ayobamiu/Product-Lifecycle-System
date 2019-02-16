const Recycler = require('./recyclers');


test('check if state changes',() => {
    const recycler = new Recycler();
    expect(recycler.go()).toEqual(true);
})