// ARRAY-SUM-04: Tổng tiền của giỏ hàng
// Viết hàm calcCartTotal(cartItemList) để tính tổng tiền của giỏ hàng.
// const cartItemList = [
// { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
// { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
// ];
// calcCartTotal(cartItemList);
import { calcCartTotal } from './array-sum-04';
describe('check calcCartTotal()', () => {
  test('should validate cartItemList', () => {
    expect(calcCartTotal([])).toBe(0);
    expect(calcCartTotal({})).toBe(0);
    expect(calcCartTotal('')).toBe(0);
  });
  test('should return total cash', () => {
    expect(
      calcCartTotal([
        { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
        { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
      ])
    ).toBe(250000);
    expect(
      calcCartTotal([
        { id: 1, product: { id: 1, price: 75000 }, quantity: 2 },
        { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
      ])
    ).toBe(350000);
    expect(
      calcCartTotal([
        { id: 1, product: { id: 1, price: 75000 }, quantity: 1 },
        { id: 2, product: { id: 2, price: 100000 }, quantity: 1 },
      ])
    ).toBe(175000);
  });
});
