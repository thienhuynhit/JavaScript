import isPrimeNumber from './main';

//  viet unit test cho ham
describe('Check isPrimeNumber()', () => {
  test('should return false when n <=1', () => {
    expect(isPrimeNumber(0)).toBe(false);
    expect(isPrimeNumber(1)).toBe(false);
  });
  test('should return false when n has the number of divisions more than 2', () => {
    expect(isPrimeNumber(4)).toBe(false);
    expect(isPrimeNumber(35)).toBe(false);
    expect(isPrimeNumber(12)).toBe(false);
    expect(isPrimeNumber(25)).toBe(false);
  });
  test('should return true when n has only 2 division', () => {
    const n = isPrimeNumber(5);
    expect(n).toBe(true);
  });
  test('should return true when n is 2 and 3', () => {
    expect(isPrimeNumber(2)).toBe(true);
    expect(isPrimeNumber(3)).toBe(true);
  });
});
