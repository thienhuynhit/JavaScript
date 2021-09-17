// NUMBER-09: Kiểm tra số có tổng của 2 chữ số bằng số cho trước
// Viết hàm hasTwoDigitsWithSum(n, sum) để kiểm tra n (9 < n < 1000000) có chứa 2 chữ số bất kỳ nào có
// tổng bằng sum (0 < sum < 19) cho trước không?
// Ví dụ:
// hasTwoDigitsWithSum(10, 1) --> true vì 0 + 1 = 1
// hasTwoDigitsWithSum(101, 3) --> false vì không có 2 chữ số nào cộng lại bằng 3
// hasTwoDigitsWithSum(11, 2) --> true

import { hasTwoDigitsWithSum } from './number-09';
describe('check hasTwoDigitsWithSum(n)', () => {
  test('should validate n', () => {
    expect(hasTwoDigitsWithSum(-1, 0)).toBe(false);
    expect(hasTwoDigitsWithSum(0, -1)).toBe(false);
    expect(hasTwoDigitsWithSum(9, 1.1)).toBe(false);
    expect(hasTwoDigitsWithSum(10.4, 9)).toBe(false);
    expect(hasTwoDigitsWithSum(1000000, 17)).toBe(false);
  });
  test('should return false if n is not hasTwoDigitsWithSum', () => {
    expect(hasTwoDigitsWithSum(10, 2)).toBe(false);
    expect(hasTwoDigitsWithSum(102, 4)).toBe(false);
    expect(hasTwoDigitsWithSum(2345, 11)).toBe(false);
    expect(hasTwoDigitsWithSum(10099, 14)).toBe(false);
    expect(hasTwoDigitsWithSum(10234, 10)).toBe(false);
  });
  test('should return true when n is hasTwoDigitsWithSum', () => {
    expect(hasTwoDigitsWithSum(10, 1)).toBe(true);
    expect(hasTwoDigitsWithSum(123, 5)).toBe(true);
    expect(hasTwoDigitsWithSum(2456, 11)).toBe(true);
    expect(hasTwoDigitsWithSum(98765, 13)).toBe(true);
    expect(hasTwoDigitsWithSum(22, 4)).toBe(true);
    expect(hasTwoDigitsWithSum(30451, 5)).toBe(true);
    expect(hasTwoDigitsWithSum(2687, 14)).toBe(true);
  });
});
