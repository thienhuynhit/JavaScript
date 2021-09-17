// ARRAY-COUNT-04: Ðếm số lượng các số khác nhau có trong mảng
// Viết hàm countUniqueNumbers(numberList) để tìm ra có bao nhiêu số khác nhau trong mảng.
// countUniqueNumbers([]); // 0
// countUniqueNumbers([1, 1, 1]); // 1
// countUniqueNumbers([1, 2, 3]); // 3
// countUniqueNumbers([1, 2, 2, 3, 1]); // 3
import { countUniqueNumbers } from './array-count-04';
describe('check countUniqueNumbers(numberList) ', () => {
  test('should validate', () => {
    expect(countUniqueNumbers([])).toBe(0);
    expect(countUniqueNumbers({})).toBe(0);
    expect(countUniqueNumbers('')).toBe(0);
    expect(countUniqueNumbers(123)).toBe(0);
  });
  test('should return the number of diffrent numbers in arr', () => {
    const arr = [3, 4, 1];
    [
      [12, 3, 3, 4],
      [1, 2, 3, 4],
      [1, 1, 1, 1],
    ].forEach((numbers, idx) => {
      expect(countUniqueNumbers(numbers)).toBe(arr[idx]);
    });
  });
});
