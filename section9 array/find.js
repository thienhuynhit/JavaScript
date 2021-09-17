'use strict';
// viet lai ham find
//  v1
function findFirstEvenNumber(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  // processing...

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (number % 2 === 0) return number;
  }
  return undefined;
}
console.log(findFirstEvenNumber([1, 2, 3]));

//  v2
function findFirstEvenNumber(numberList, callbackfnc) {
  if (!Array.isArray(numberList)) return undefined;
  // processing...

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (callbackfnc(number)) return number;
  }
  return undefined;
}

function callbackfnc(n) {
  return n % 2 === 0;
}
console.log(findFirstEvenNumber([1, 4, 6], callbackfnc));

//  v3
function findFirstEvenNumber(numberList, callbackfnc) {
  if (!Array.isArray(numberList)) return undefined;
  // processing...

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (callbackfnc(number)) return number;
  }
  return undefined;
}
// function inline
//anonymous function
console.log(
  findFirstEvenNumber([1, 8, 6], function (n) {
    return n % 2 == 0;
  })
);

//use arrow function to callback function
console.log(findFirstEvenNumber([3, 5, 7], (n) => n % 2 === 0));
