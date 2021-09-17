// NUMBER-07: Kiểm tra số đối xứng
// Viết hàm isSymetricNumber(n) để kiểm tra n có phải là số đối xứng hay không?
// Với n thoả điều kiện 1 < n < 1000000
// Số đối xứng là số đọc từ trái sang phải cũng giống như đọc từ phải sang trái.
// Trả về true nếu đúng, ngược lại trả về false
// Ví dụ:
// isSymetricNumber(10) --> false
// isSymetricNumber(11) --> true
// isSymetricNumber(12321) --> true
import { isSymetricNumber } from './number-07';
describe('check isSymetricNumber(n)', () => {
  test('should check validate n', () => {
    expect(isSymetricNumber(0)).toBe(false);
    expect(isSymetricNumber(1)).toBe(false);
    expect(isSymetricNumber(2.1)).toBe(false);
    expect(isSymetricNumber(-2)).toBe(false);
    expect(isSymetricNumber(1000000)).toBe(false);
  });
  test('should return false when n is not symetric number', () => {
    expect(isSymetricNumber(12)).toBe(false);
    expect(isSymetricNumber(10)).toBe(false);
    expect(isSymetricNumber(98)).toBe(false);
    expect(isSymetricNumber(1234)).toBe(false);
    expect(isSymetricNumber(58687)).toBe(false);
  });
  test('should return true when n is symetric number', () => {
    expect(isSymetricNumber(11)).toBe(true);
    expect(isSymetricNumber(99)).toBe(true);
    expect(isSymetricNumber(989)).toBe(true);
    expect(isSymetricNumber(1221)).toBe(true);
    expect(isSymetricNumber(15351)).toBe(true);
  });
});
