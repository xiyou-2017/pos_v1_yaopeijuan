'use strict';

descript('buildItems',(inputs) =>{
  let inputs = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2',
    'ITEM000005',
    'ITEM000005',
    'ITEM000005'
  ];
  it('should return ',() =>{
    let expecItems =[
      {
        item:{
          barcode: 'ITEM000001',
          name: '雪碧',
          unit: '瓶',
          price: 3.00},
        count:5
      },
      {
        item:{
          barcode: 'ITEM000003',
          name: '荔枝',
          unit: '斤',
          price: 15.00},
        count:2
      },
      {
        item:{
          barcode: 'ITEM000005',
          name: '方便面',
          unit: '袋',
          price: 4.50},
        count:3
      }
    ];
    expect(buildItems(inputs)).toEqual(expecItems);
  });
});
descript('buildSubTotal',(cartItems) =>{
  it
})
