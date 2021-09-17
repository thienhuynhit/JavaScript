// LOGIC-04: Tìm số có số lần xuất hiện nhiều nhất
// Viết hàm findMostFrequentNumber(numberList) tìm số có số lần xuất hiện nhiều nhất trong mảng
// numberList, trường hợp có nhiều số cùng tần số xuất hiện thì trả về số đầu tiên.
// findMostFrequentNumber([1]); // 1
// findMostFrequentNumber([1, 2, 3, 2]); // 2
// findMostFrequentNumber([1, 2, 3, 2, 3, 4]); // 2
import { findMostFrequentNumber, findMostFrequentNumberV2 } from './logic-04';
describe('check findMostFrequentNumber()', () => {
  test('should validate', () => {
    expect(findMostFrequentNumber([])).toBe(undefined);
    expect(findMostFrequentNumber({})).toBe(undefined);
    expect(findMostFrequentNumber('')).toBe(undefined);
  });
  test('should return the first most frequent number', () => {
    expect(findMostFrequentNumber([1])).toBe(1);
    expect(findMostFrequentNumber([1, 2])).toBe(1);
    expect(findMostFrequentNumber([4, 2, 3])).toBe(4);
    expect(findMostFrequentNumber([2, 2, 1, 3, 4, 4, 5])).toBe(2);
    expect(findMostFrequentNumber([5, 6, 6, 3, 6, 3, 3])).toBe(6);
  });
});

describe('check findMostFrequentNumberV2()', () => {
  test('should validate', () => {
    expect(findMostFrequentNumberV2([])).toBe(undefined);
    expect(findMostFrequentNumberV2({})).toBe(undefined);
    expect(findMostFrequentNumberV2('')).toBe(undefined);
  });
  test('should return the first most frequent number', () => {
    expect(findMostFrequentNumberV2([1])).toBe(1);
    expect(findMostFrequentNumberV2([1, 2])).toBe(1);
    expect(findMostFrequentNumberV2([4, 2, 3])).toBe(4);
    expect(findMostFrequentNumberV2([2, 2, 1, 3, 4, 4, 5])).toBe(2);
    expect(findMostFrequentNumberV2([5, 6, 6, 3, 6, 3, 3])).toBe(6);
  });
});
