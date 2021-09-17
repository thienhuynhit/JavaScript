'use strict';
// find max
// use for i
// use for each
// use reduce
const findMaxI = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    throw new Error('Please input the Number List!!');
  }
  // do some thing right
  let max = numberList[0];
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] > max) max = numberList[i];
  }
  return max;
};

console.log(findMaxI([1, 5, 3, 18]));
console.log(findMaxI([]));

//  use for each
const findMaxE = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  // do some thing right
  let max = numberList[0];
  numberList.forEach((x) => {
    if (x > max) max = x;
  });
  return max;
};

console.log(findMaxE([12, 4, -1, 6, 33]));

// use reduce
const findMaxReduce = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  //   do the right thing
  return numberList.reduce((max, number) => (number > max ? number : max));
};
console.log(findMaxReduce([2, 1, 5, -77, -99]));
console.log(findMaxReduce([]));
