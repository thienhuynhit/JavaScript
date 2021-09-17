'use strict';
const numberList = [2, 1, 6, 5, 12];
//  sap xep tang dan
numberList.sort((a, b) => a - b);
console.log(numberList);
//  sap xep giam dan
numberList.sort((a, b) => b - a);
console.log(numberList);

// thu viet ham thay the sort theo bubble sort
function newSort(arr) {
  if (!Array.isArray(arr)) return undefined;
  //   processing...
}
