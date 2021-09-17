// NUMBER-02: Kiểm tra số giảm dần
// Viết hàm isDecreasingNumber(n) để kiểm tra n có phải là số giảm dần hay không?
// 0 < n < 1000000
// Số giảm dần có ít nhất 2 chữ số
// Chữ số bên phải luôn nhỏ hơn chữ số bên trái
// Trả về true nếu là số giảm dần, ngược lại trả về false.
// Ví dụ:
// isDecreasingNumber(11) --> false
// isDecreasingNumber(321) --> true
// isDecreasingNumber(12321) --> false
import { isDecreasingNumber } from './number-02';

describe('check isDecreasingNumber()', () => {
  test('should validate n<10 n nguyen duong va n<1000000 ', () => {
    expect(isDecreasingNumber(-1)).toBe(false);
    expect(isDecreasingNumber(4)).toBe(false);
    expect(isDecreasingNumber(4.1)).toBe(false);
    expect(isDecreasingNumber(2000005)).toBe(false);
  });
  test('should return false if n is not a decreasing number', () => {
    expect(isDecreasingNumber(120)).toBe(false);
    expect(isDecreasingNumber(111)).toBe(false);
    expect(isDecreasingNumber(2111)).toBe(false);
    expect(isDecreasingNumber(125)).toBe(false);
    expect(isDecreasingNumber(32543)).toBe(false);
  });
  test('should return true if n is a decreasing number', () => {
    expect(isDecreasingNumber(10)).toBe(true);
    expect(isDecreasingNumber(321)).toBe(true);
    expect(isDecreasingNumber(4210)).toBe(true);
    expect(isDecreasingNumber(7541)).toBe(true);
    expect(isDecreasingNumber(97640)).toBe(true);
  });
});
