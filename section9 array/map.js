'use strict';
// viet lap ham map
function newMap(arr, callbackfnc) {
  // check validate args
  if (!Array.isArray(arr) || typeof callbackfnc !== 'function') return undefined;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const newElement = callbackfnc(element, i);
    newArr.push(newElement);
  }
  return newArr;
}
console.log(newMap([1, 3, 5], (x) => x + 2));
// cac ptu o vi tri chan se nhan 2 vi tri le cong 1
console.log(newMap([1, 3, 5, 7, 9], (x, idx) => (idx % 2 === 0 ? x * 2 : x + 1)));
