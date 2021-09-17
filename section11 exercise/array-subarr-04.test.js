// ARRAY-SUBARR-04: Tìm các mảng con có chứa số dương chẳn liên tiếp
// Viết hàm findAllPositiveEvenSubArr(numberList) để tìm ra tất cả các mảng con chỉ chứa các số dương
// chẳn.
// findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20]);
// should return
// [
// [2, 4],
// [10, 20]
// ]
import { findAllPositiveEvenSubArr, findAllPositiveEvenSubArrV2 } from './array-subarr-04';
describe('check findAllPositiveEvenSubArr(numberList)', () => {
  test('should check validate', () => {
    expect(findAllPositiveEvenSubArr([])).toEqual([]);
    expect(findAllPositiveEvenSubArr({})).toEqual([]);
    expect(findAllPositiveEvenSubArr('')).toEqual([]);
  });
  test('should return all subarr', () => {
    expect(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20])).toEqual([
      [2, 4],
      [10, 20],
    ]);

    expect(findAllPositiveEvenSubArr([2, 2, 4, 7, 5, 8, 4])).toEqual([
      [2, 2, 4],
      [8, 4],
    ]);
  });
});

describe('check findAllPositiveEvenSubArrV2(numberList)', () => {
  test('should check validate', () => {
    expect(findAllPositiveEvenSubArrV2([])).toEqual([]);
    expect(findAllPositiveEvenSubArrV2({})).toEqual([]);
    expect(findAllPositiveEvenSubArrV2('')).toEqual([]);
  });
  test('should return all subarr', () => {
    expect(findAllPositiveEvenSubArrV2([1, 2, 4, 3, 5, 10, 20])).toEqual([
      [2, 4],
      [10, 20],
    ]);

    expect(findAllPositiveEvenSubArrV2([2, 2, 4, 7, 5, 8, 4])).toEqual([
      [2, 2, 4],
      [8, 4],
    ]);
  });
});
