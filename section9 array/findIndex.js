'use strict';
// viet ham thay the findIndex();
//  v1
function findIndexOfFirstNumber(numberList, callbackfn) {
  if (!Array.isArray(numberList)) return -1;
  // processing...

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (callbackfn(number)) return i;
  }
  return -1;
}
console.log(
  findIndexOfFirstNumber([5, 2, 3], function (n) {
    return n % 2 !== 0;
  })
);
