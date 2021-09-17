// ARRAY-SUM-04: Tổng tiền của giỏ hàng
// Viết hàm calcCartTotal(cartItemList) để tính tổng tiền của giỏ hàng.
// const cartItemList = [
// { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
// { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
// ];
// calcCartTotal(cartItemList);
export function calcCartTotal(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;
  // validate
  return cartItemList.reduce((totalcash, item) => {
    totalcash += item['product'].price * item.quantity;
    return totalcash;
  }, 0);
}
