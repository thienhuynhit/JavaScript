// Viết hàm isIncreasingNumber(n) để kiểm tra n có phải là số tăng dần hay không?
// 0 < n < 1000000
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Trả về true nếu là số tăng dần, ngược lại trả về false.
// Ví dụ:
// isIncreasingNumber(11) --> false
// isIncreasingNumber(123) --> true
// isIncreasingNumber(12321) --> false
import { isIncreasingNumber } from './number-01';
describe('check isIncreasingNumber(n)', () => {
  test('should validate n must 0<n<1000000 n>=10 and n is an integer number ', () => {
    expect(isIncreasingNumber(-3)).toBe(false);
    expect(isIncreasingNumber(0)).toBe(false);
    expect(isIncreasingNumber(9)).toBe(false);
    expect(isIncreasingNumber(1000003)).toBe(false);
    expect(isIncreasingNumber(2.3)).toBe(false);
  });

  test('should return false when n is not an increasing number', () => {
    expect(isIncreasingNumber(21)).toBe(false);
    expect(isIncreasingNumber(53)).toBe(false);
    expect(isIncreasingNumber(674)).toBe(false);
    expect(isIncreasingNumber(1993)).toBe(false);
    expect(isIncreasingNumber(33333)).toBe(false);
    expect(isIncreasingNumber(1111)).toBe(false);
  });
  test('should return true when n is really an increasing number', () => {
    expect(isIncreasingNumber(12)).toBe(true);
    expect(isIncreasingNumber(139)).toBe(true);
    expect(isIncreasingNumber(256)).toBe(true);
    expect(isIncreasingNumber(6789)).toBe(true);
  });
});
