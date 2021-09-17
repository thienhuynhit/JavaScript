'use strict';
console.log('hello number');
// chu y 2**3=2^3
// +"23"=23;
//-"12"=-12;
console.log(0.1 + 0.2 === 0.3);
console.log((0.125).toFixed(2));
// luu y khi so sanh so thuc
console.log(Math.abs(0.2 + 0.1 - 0.3) < Number.EPSILON); // neu gia tri tuyet doi cua 2 so thuc nho hon epsilon thi 2 so do bang nhau
console.log((0.1 + 0.2).toFixed(1) === (0.3).toFixed(1));
// cac ham lam tron
console.log(Math.ceil(1.2)); // lam tron len
console.log(Math.floor(1.2)); // lam tron xuong
console.log(Math.round(1.5)); // lam tron theo so hoc
console.log(Math.trunc(2.5)); // lam tron den phan nguyen
// ham random number tu [0,n]
function randomNumber(n) {
  if (n < 0) return -1;
  return Math.round(Math.random() * n);
}
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
// ham random [a,b]=> min a va random b-a
function randomNumberAB(a, b) {
  if (a >= b) return -1;

  return Math.round(Math.random() * (b - a)) + a;
}
console.log(randomNumberAB(10, 99));
console.log(randomNumberAB(10, 99));
console.log(randomNumberAB(10, 99));
console.log(randomNumberAB(10, 99));
console.log(randomNumberAB(10, 99));
console.log(randomNumberAB(10, 99));
console.log(randomNumberAB(100, 999));
console.log(randomNumberAB(100, 999));
console.log(randomNumberAB(100, 999));
console.log(randomNumberAB(100, 999));
// ham so tinh chu vi hinh chu nhat
function calcPerimeterOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return (a + b) * 2;
}
// ham tinh dien tich hinh chu nhat
function calcAreaOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return a * b;
}
// ham tinh dien tich va chu vi hinh tron
function caclAreaCircle(r) {
  if (r <= 0) return -1;
  return r * r * Math.PI;
}
console.log(caclAreaCircle(4));
// ham tinh chu vi hinh tron
function calcPerimeterOfCircle(r) {
  if (r <= 0) return -1;
  return 2 * r * Math.PI;
}
console.log(calcPerimeterOfCircle(4));
