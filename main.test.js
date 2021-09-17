import { isPrimeNumber, listDivisionOfN } from './main';

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

// viet unit test truoc khi viet ham
// viet ham liet ke tat ca cac uoc so cua so nguyen duong n
// gia tri tra ve la 1 mang tang dan
// ex: n>0 and n<=100
// n=0 -> undefinded
// n=1 -> [1]
// n=2 ->[1,2]
// n=4 ->[1,2,4]
describe('check listDivisionOfN()', () => {
  test('should return undefined when n is invalidated n<=0 and n>100', () => {
    expect(listDivisionOfN(-1)).toBe(undefined);
    expect(listDivisionOfN(0)).toBe(undefined);
    expect(listDivisionOfN(102)).toBe(undefined);
  });

  test('should return new Array has one element [1] when n===1', () => {
    expect(listDivisionOfN(1)).toEqual([1]);
    const isArr = typeof listDivisionOfN(1);
    expect(isArr).toBe('object');
  });
  test('should return an increament array when n has more than 2 divisions', () => {
    expect(listDivisionOfN(6)).toEqual([1, 2, 3, 6]);
    expect(listDivisionOfN(8)).toEqual([1, 2, 4, 8]);
    expect(listDivisionOfN(10)).toEqual([1, 2, 5, 10]);
    expect(listDivisionOfN(2)).toEqual([1, 2]);
  });
});
