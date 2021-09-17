// ARRAY-FILTER-06: Tìm tất cả các số mà bắt đầu bằng chữ số lẻ
// Viết hàm findAllNumbers(numberList) để tìm ra tất cả các số có chữ số đầu tiên là chữ số lẻ.
// findAllNumbers([1, 5, 6]); // [1, 5]
// findAllNumbers([234, 421, 123]); // [123]
export function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  // validate
  const arr = [];
  numberList.forEach((number) => {
    const numberStr = Math.abs(number).toString();
    if (+numberStr[0] % 2 === 1) arr.push(number);
  });
  return arr;
}

// viet bang reduce
export function findAllNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  // validate
  return numberList.reduce((numbersResult, number) => {
    const strN = Math.abs(number).toString();
    if (+strN[0] % 2 === 1) numbersResult.push(number);
    return numbersResult;
  }, []);
}

// co the tach them 1 ham de check so dau tien la so le
