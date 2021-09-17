// NUMBER-04: Kiểm tra số nguyên tố
// Viết hàm isPrime(n) để kiểm tra n có phải là số nguyên tố không?
// Số nguyên tố là số chỉ chia hết cho 1 và chính nó.
// 0 < n < 100000
// Trả về true nếu là số nguyên tố, ngược lại trả về false.
// Ví dụ:
// isPrime(3) --> true
// isPrime(4) --> false
// isPrime(11) --> true
import { isPrime } from './number-04';

describe('check isPrime(n)', () => {
  test('should validate n', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(1.1)).toBe(false);
    expect(isPrime(100005)).toBe(false);
  });
  test('should return fasle when n is not a prime number', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(15)).toBe(false);
    expect(isPrime(21)).toBe(false);
    expect(isPrime(9999)).toBe(false);
    expect(isPrime(777)).toBe(false);
  });
  test('should return true when n is a prime number', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(101)).toBe(true);
    expect(isPrime(31)).toBe(true);
    expect(isPrime(79)).toBe(true);
    expect(isPrime(83)).toBe(true);
    expect(isPrime(97)).toBe(true);
  });
});
