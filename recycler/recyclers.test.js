const Recycler = require('./recyclers');
const Factory = require('../factory/factory');


test('check if state changes',() => {
    const recycler = new Recycler(new Factory('Toothbrush', 'Producer'));
    expect(recycler.go('Toothbrush')).toEqual(true);
})