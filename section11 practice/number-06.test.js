// NUMBER-06: Kiểm tra số hoàn hảo
// Viết hàm isPerfectNumber(n) để kiểm tra n có phải là số hoàn hảo hay không?
// Với n thoả điều kiện 1 < n < 1000
// Số hoàn hảo là số mà tổng của tất cả ước số (không tính chính nó, tức từ 1 đến n - 1) bằng chính nó.
// Trả về true nếu đúng, ngược lại trả về false
// Ví dụ: 6 = 1 + 2 + 3 (như vậy 6 là một số hoàn hảo)
// Gợi ý: không nhất thiết phải chạy tới (n - 1) để tìm ra tất cả các ước số của n
import { isPerfectNumber } from './number-06';
describe('check isPerfectNumber()', () => {
  test('should validate n', () => {
    expect(isPerfectNumber(0)).toBe(false);
    expect(isPerfectNumber(1)).toBe(false);
    expect(isPerfectNumber(-1)).toBe(false);
    expect(isPerfectNumber(1.1)).toBe(false);
    expect(isPerfectNumber(1002)).toBe(false);
  });
  test('should return false if n is not perfactnumber', () => {
    expect(isPerfectNumber(7)).toBe(false);
    expect(isPerfectNumber(9)).toBe(false);
    expect(isPerfectNumber(10)).toBe(false);
    expect(isPerfectNumber(15)).toBe(false);
    expect(isPerfectNumber(81)).toBe(false);
  });
  test('should return true if n is the perfect number', () => {
    expect(isPerfectNumber(6)).toBe(true);
    expect(isPerfectNumber(28)).toBe(true);
    expect(isPerfectNumber(496)).toBe(true);
  });
});
