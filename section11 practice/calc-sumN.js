// Bài 1: Tính S(n) = 1 + 2 + 3 + … + n
export const sums = (n) => {
  if (n <= 0) return 0;
  if (n % 1 < 1 && n % 1 > 0) return 0;
  // check validate
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
// console.log(sums(100));
// sums v2

export const sumsv2 = (n) => {
  if (n <= 0) return 0;
  if (n % 1 < 1 && n % 1 > 0) return 0;
  // validate
  return (n * (n + 1)) / 2;
};
// console.log(sumsv2(100));
