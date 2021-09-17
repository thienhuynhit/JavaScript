'use strict';
// viet lap ham filter
function newFilter(arr, callbackfnc) {
  // check validate args
  if (!Array.isArray(arr) || typeof callbackfnc !== 'function') return undefined;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (callbackfnc(element, i)) newArr.push(element);
  }
  return newArr;
}

console.log(newFilter([3, 5, 7, 8], (x) => x < 2 ** 3));
