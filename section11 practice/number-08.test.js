// NUMBER-08: Kiểm tra số có tổng chữ số chia hết cho 10
// Viết hàm isDivisibleBy10(n) để kiểm tra n (0 < n < 1000000) có tổng chữ số chia hết cho 10 hay không?
// Ví dụ:
// isDivisibleBy10(10) --> false
// isDivisibleBy10(1234) --> true vì 1 + 2 + 3 + 4 = 10 chia hết cho 10
// isDivisibleBy10(123455) --> true vì 1 + 2 + 3 + 4 + 5 + 5 = 20 chia hết cho 10
import { isDivisibleBy10 } from './number-08';
describe('check isDivisibleBy10()', () => {
  test('should validate n and n<10 return false', () => {
    expect(isDivisibleBy10(-1)).toBe(false);
    expect(isDivisibleBy10(0)).toBe(false);
    expect(isDivisibleBy10(1.2)).toBe(false);
    expect(isDivisibleBy10(8)).toBe(false);
    expect(isDivisibleBy10(9)).toBe(false);
    expect(isDivisibleBy10(1000000)).toBe(false);
  });
  test('should return flase if n is not Divisible By 10', () => {
    expect(isDivisibleBy10(10)).toBe(false);
    expect(isDivisibleBy10(20)).toBe(false);
    expect(isDivisibleBy10(23)).toBe(false);
    expect(isDivisibleBy10(1242)).toBe(false);
    expect(isDivisibleBy10(5678)).toBe(false);
  });
  test('should retunr true if n is Divisible By 10', () => {
    expect(isDivisibleBy10(1243)).toBe(true);
    expect(isDivisibleBy10(82)).toBe(true);
    expect(isDivisibleBy10(2639)).toBe(true);
    expect(isDivisibleBy10(111133)).toBe(true);
  });
});
