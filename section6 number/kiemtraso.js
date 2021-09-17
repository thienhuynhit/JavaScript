'use strict';
// ham kiem tra 1 so chan
function isEvenNumber(n) {
  return n % 2 === 0;
}
// ham kiem tra so le
function isOddNumber(n) {
  return n % 2 === 1;
}
// ham kiem tra so chinh phuong
function isPerfectNumber(n) {
  if (n <= 0) return -1;
  const sqrtNumber = Math.sqrt(n);
  const sqrtIntNumber = Math.trunc(sqrtNumber);
  return sqrtIntNumber ** 2 === n;
}
console.log(isPerfectNumber(1));
console.log(isPerfectNumber(5));
console.log(isPerfectNumber(4));
// ham kiem tra so nguyen to
