// NUMBER-05: Kiểm tra số chính phương
// Viết hàm isPerfectSquare(n) để kiểm tra n có phải là số chính phương không?
// 0 < n < 100000
// Số chính phương là số có căn bậc 2 của nó là một số tự nhiên.
// Trả về true nếu là số chính phương, ngược lại trả về false.
// Ví dụ: 4, 9, 25, 36 là các số chính phương.
import { isPerfectSquare } from './number-05';
describe('check isPerfectSquare(n)', () => {
  test('should validate n', () => {
    expect(isPerfectSquare(0)).toBe(false);
    expect(isPerfectSquare(-1)).toBe(false);
    expect(isPerfectSquare(1.2)).toBe(false);
    expect(isPerfectSquare(100003)).toBe(false);
  });
  test('should return false when n is not a perfect square number', () => {
    expect(isPerfectSquare(3)).toBe(false);
    expect(isPerfectSquare(5)).toBe(false);
    expect(isPerfectSquare(7)).toBe(false);
    expect(isPerfectSquare(13)).toBe(false);
    expect(isPerfectSquare(1001)).toBe(false);
    expect(isPerfectSquare(11007)).toBe(false);
  });
  test('should return true when n is a perfect square number', () => {
    expect(isPerfectSquare(1)).toBe(true);
    expect(isPerfectSquare(4)).toBe(true);
    expect(isPerfectSquare(9)).toBe(true);
    expect(isPerfectSquare(16)).toBe(true);
    expect(isPerfectSquare(25)).toBe(true);
    expect(isPerfectSquare(81)).toBe(true);
    expect(isPerfectSquare(121)).toBe(true);
    expect(isPerfectSquare(169)).toBe(true);
    expect(isPerfectSquare(441)).toBe(true);
    expect(isPerfectSquare(9801)).toBe(true);
    expect(isPerfectSquare(10201)).toBe(true);
  });
});
