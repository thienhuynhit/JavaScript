import { sums, sumsv2 } from './calc-sumN';

// Bài 1: Tính S(n) = 1 + 2 + 3 + … + n
// n<=0 -> return 0
// n phai la so nguyen duong

describe('check sums(n)', () => {
  test('validate n must be not a float', () => {
    expect(sums(1.1)).toBe(0);
    expect(sums(0.1)).toBe(0);
    expect(sums(2.1)).toBe(0);
    expect(sums(3.01)).toBe(0);
  });
  test('should return 0 when n<=0', () => {
    expect(sums(0)).toBe(0);
    expect(sums(-1)).toBe(0);
    expect(sums(-2)).toBe(0);
  });
  test('should return the sum of s(n)', () => {
    expect(sums(10)).toBe(55);
    expect(sums(6)).toBe(21);
    expect(sums(8)).toBe(36);
  });
});

describe('check sumsv2(n)', () => {
  test('validate n must be not a float', () => {
    expect(sumsv2(1.1)).toBe(0);
    expect(sumsv2(0.1)).toBe(0);
    expect(sumsv2(2.1)).toBe(0);
    expect(sumsv2(3.01)).toBe(0);
  });
  test('should return 0 when n<=0', () => {
    expect(sumsv2(0)).toBe(0);
    expect(sumsv2(-1)).toBe(0);
    expect(sumsv2(-2)).toBe(0);
  });
  test('should return the sum of s(n)', () => {
    expect(sumsv2(10)).toBe(55);
    expect(sumsv2(6)).toBe(21);
    expect(sumsv2(8)).toBe(36);
  });
});
