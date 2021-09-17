// ARRAY-COUNT-04: Ðếm số lượng các số khác nhau có trong mảng
// Viết hàm countUniqueNumbers(numberList) để tìm ra có bao nhiêu số khác nhau trong mảng.
// countUniqueNumbers([]); // 0
// countUniqueNumbers([1, 1, 1]); // 1
// countUniqueNumbers([1, 2, 3]); // 3
// countUniqueNumbers([1, 2, 2, 3, 1]); // 3
export function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  // validate
  return numberList.reduce((result, number, idx) => {
    const x = numberList[idx + 1];
    result = x === number ? result : ++result;
    return result;
  }, 0);
}
