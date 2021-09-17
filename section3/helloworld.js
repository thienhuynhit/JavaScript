const callOrder = (mon = 1) => {};
const orderApp = {
  menu: ['bánh mì', 'chả cá'],
  price: 20,
  calcFee() {
    return this.price + 20;
  },
};
const { menu, price } = orderApp;
for (let i = 0; i < menu.length; i++) {
  console.log(`Món ${menu[i]} có giá là: ${price}`);
}
console.log('tổng bill là: ', orderApp.calcFee());
console.log('hello');
for (const [key, value] of Object.entries(orderApp)) {
  console.log(value);
}
