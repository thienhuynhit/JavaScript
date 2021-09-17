// ARRAY-FILTER-06: Tìm tất cả các số mà bắt đầu bằng chữ số lẻ
// Viết hàm findAllNumbers(numberList) để tìm ra tất cả các số có chữ số đầu tiên là chữ số lẻ.
// findAllNumbers([1, 5, 6]); // [1, 5]
// findAllNumbers([234, 421, 123]); // [123]
import { findAllNumbers, findAllNumbersV2 } from './array-filter-06';
describe('check function findAllNumbers(numberList)', () => {
  test('should validate ', () => {
    expect(findAllNumbers([])).toEqual([]);
    expect(findAllNumbers({})).toEqual([]);
    expect(findAllNumbers('')).toEqual([]);
  });
  test('should return [] when dont have any number in list', () => {
    expect(findAllNumbers([23, 44, 21, 49])).toEqual([]);
    expect(findAllNumbers([2, 80, 67, 48])).toEqual([]);
  });
  test('should return all numbers have number in list', () => {
    expect(findAllNumbers([-33, 44, 12, 49])).toEqual([-33, 12]);
    expect(findAllNumbers([2, 10, 17, 48])).toEqual([10, 17]);
  });
});

describe('check function findAllNumbersV2(numberList)', () => {
  test('should validate ', () => {
    expect(findAllNumbersV2([])).toEqual([]);
    expect(findAllNumbersV2({})).toEqual([]);
    expect(findAllNumbersV2('')).toEqual([]);
  });
  test('should return [] when dont have any number in list', () => {
    expect(findAllNumbersV2([23, 44, 21, 49])).toEqual([]);
    expect(findAllNumbersV2([2, 80, 67, 48])).toEqual([]);
  });
  test('should return all numbers have number in list', () => {
    expect(findAllNumbersV2([33, 44, 12, 49])).toEqual([33, 12]);
    expect(findAllNumbersV2([2, 10, 17, 48])).toEqual([10, 17]);
  });
});
