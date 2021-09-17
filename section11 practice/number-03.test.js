// NUMBER-03: Kiểm tra số tăng dần đều theo khoảng cách cho trước
// Viết hàm isIncreasingNumberByDistance(n, x) để kiểm tra n có phải là số tăng dần đều với khoảng cách
// giữa 2 chữ số là x không?
// 0 < n < 1000000, 0 < x < 5
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Khoảng cách của 2 chữ số liền kề là x
// Trả về true nếu là số tăng dần đều theo khoảng cách x, ngược lại trả về false.
// Ví dụ:
// isIncreasingNumberByDistance(11, 1) --> false
// isIncreasingNumberByDistance(123, 1) --> true
// isIncreasingNumberByDistance(135, 2) --> true
// isIncreasingNumberByDistance(135, 1) --> false
import { isIncreasingNumberByDistance } from './number-03';

describe('check isIncreasingNumberByDistance()', () => {
  test('should validate n , x', () => {
    expect(isIncreasingNumberByDistance(0, 0)).toBe(false);
    expect(isIncreasingNumberByDistance(-1, -1)).toBe(false);
    expect(isIncreasingNumberByDistance(-2, 3)).toBe(false);
    expect(isIncreasingNumberByDistance(-2, 6)).toBe(false);
    expect(isIncreasingNumberByDistance(25, -1)).toBe(false);
    expect(isIncreasingNumberByDistance(12, 5)).toBe(false);
    expect(isIncreasingNumberByDistance(78, 6)).toBe(false);
    expect(isIncreasingNumberByDistance(9, -1)).toBe(false);
    expect(isIncreasingNumberByDistance(7, 3)).toBe(false);
    expect(isIncreasingNumberByDistance(7, 5)).toBe(false);
    expect(isIncreasingNumberByDistance(1000008, -1)).toBe(false);
    expect(isIncreasingNumberByDistance(1000008, 3)).toBe(false);
    expect(isIncreasingNumberByDistance(1000007, 6)).toBe(false);
    expect(isIncreasingNumberByDistance(12.1, 0)).toBe(false);
    expect(isIncreasingNumberByDistance(234.5, 4)).toBe(false);
    expect(isIncreasingNumberByDistance(123.1, 6)).toBe(false);
    expect(isIncreasingNumberByDistance(123.1, -0.1)).toBe(false);
    expect(isIncreasingNumberByDistance(123, 2.4)).toBe(false);
    expect(isIncreasingNumberByDistance(12, 6.1)).toBe(false);
  });
  test('should return false when n is not an inCreasingNumberByDistance', () => {
    expect(isIncreasingNumberByDistance(11, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(123, 2)).toBe(false);
    expect(isIncreasingNumberByDistance(236, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(258, 2)).toBe(false);
    expect(isIncreasingNumberByDistance(579, 3)).toBe(false);
    expect(isIncreasingNumberByDistance(12345, 2)).toBe(false);
    expect(isIncreasingNumberByDistance(2468, 3)).toBe(false);
  });
  test('should return true when n is an inCreasingNumberByDistance', () => {
    expect(isIncreasingNumberByDistance(13, 2)).toBe(true);
    expect(isIncreasingNumberByDistance(123, 1)).toBe(true);
    expect(isIncreasingNumberByDistance(1357, 2)).toBe(true);
    expect(isIncreasingNumberByDistance(2468, 2)).toBe(true);
    expect(isIncreasingNumberByDistance(5678, 1)).toBe(true);
    expect(isIncreasingNumberByDistance(12345, 1)).toBe(true);
    expect(isIncreasingNumberByDistance(159, 4)).toBe(true);
    expect(isIncreasingNumberByDistance(369, 3)).toBe(true);
  });
});
