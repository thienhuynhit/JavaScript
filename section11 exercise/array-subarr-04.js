// ARRAY-SUBARR-04: Tìm các mảng con có chứa số dương chẳn liên tiếp
// Viết hàm findAllPositiveEvenSubArr(numberList) để tìm ra tất cả các mảng con chỉ chứa các số dương
// chẳn.
// findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20]);
// should return
// [
// [2, 4],
// [10, 20]
// ]
export function findAllPositiveEvenSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  // validate
  const arr = [];
  let i = 0;
  while (i < numberList.length) {
    if (numberList[i] % 2 === 0) {
      // console.log('day la so chia het co 2: ', numberList[i], ' vi tri ', i);
      for (let j = i; j <= numberList.length; j++) {
        if (numberList[j] % 2 === 1 || typeof numberList[j] === 'undefined') {
          // console.log('day la chuoi so chan ', numberList.slice(i, j));
          const arrSub = numberList.slice(i, j);
          arr.push(arrSub);
          i = j;
          // console.log('tang i=j luc so le o vi tri', j, ' so le la ', numberList[j]);
          break;
        }
        // console.log('day la so chia het co 2: ', numberList[j], ' vi tri ', j);
      }
    }
    i++;
  }
  return arr;
}

//  viet lai theo huong duyet 1 lan bang for so chan thi add vao subArr
export function findAllPositiveEvenSubArrV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const arr = [];
  let subArr = [];
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0 && numberList[i] > 0) {
      subArr.push(numberList[i]);
      console.log(subArr);
    }
    if (numberList[i] % 2 === 1 || i === numberList.length - 1) {
      if (subArr.length > 0) {
        arr.push(subArr);
        subArr = [];
      }
    }
  }
  return arr;
}
// console.log(findAllPositiveEvenSubArrV2([1, 5, 4, 4]));
// console.log(findAllPositiveEvenSubArrV2([2, 5, 4, 4]));
