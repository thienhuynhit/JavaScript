'use strict';
function isSymmetricNumber(n) {
  if (n.toString().length > 3) return false;
  // your code here
  // ham co 3 so
  if (n.toString().length === 3) {
    const donvi = (n % 100) % 10;
    const chuc = Math.trunc(n / 10) % 10;
    const tram = Math.trunc(n / 100);
    const soNguoc = donvi * 100 + chuc * 10 + tram;
    if (soNguoc === n) {
      return true;
    } else {
      return false;
    }
  }
  // ham co 2 so
  if (n.toString().length === 2) {
    const donvi = n % 10;
    const chuc = Math.trunc(n / 10);
    if (donvi === chuc) {
      return true;
    } else {
      return false;
    }
  }
  return true;
}
console.log(isSymmetricNumber(121));
