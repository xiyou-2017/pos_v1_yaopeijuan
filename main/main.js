'use strict';

let buildItems = (inputs) =>{
  let allItems = loadAllItems();
  let cartItems = [];
  for(let input of inputs){
    let inputSplit = input.split('-');
    let count = parseInt(inputSplit[1] || 1);
    let cartItem = cartItems.find((cartItem) => cartItem.item.barcode == inputSplit[0]);
    if(cartItem)
      cartItem.count += count;
    else{
      let item = allItems.find((item)=> item.barcode === inputSplit[0]);
      cartItems.push({item:item,count:count});
    }
  }
  return cartItems;
}
