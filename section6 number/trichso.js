'use strict';
function getMaxDigit(n) {
  // your code here
  if (n >= 1000 || n < 0) return -1;

  if (n.toString().length === 3) {
    const donvi = (n % 100) % 10;
    const chuc = Math.trunc(n / 10) % 10;
    const tram = Math.trunc(n / 100);

    let max = donvi;
    if (chuc > max) max = chuc;
    if (tram > max) max = tram;
    return max;
  }

  if (n.toString().length === 2) {
    const donvi = n % 10;
    const chuc = Math.trunc(n / 10);

    let max = donvi;
    if (chuc > max) max = chuc;
    return max;
  }
  return n;
}
console.log(getMaxDigit(123));
