// NUMBER-08: Kiểm tra số có tổng chữ số chia hết cho 10
// Viết hàm isDivisibleBy10(n) để kiểm tra n (0 < n < 1000000) có tổng chữ số chia hết cho 10 hay không?
// Ví dụ:
// isDivisibleBy10(10) --> false
// isDivisibleBy10(1234) --> true vì 1 + 2 + 3 + 4 = 10 chia hết cho 10
// isDivisibleBy10(123455) --> true vì 1 + 2 + 3 + 4 + 5 + 5 = 20 chia hết cho 10
export function isDivisibleBy10(n) {
  if (n < 10 || n >= 1000000) return false;
  if (n % 1 > 0 && n % 1 < 1) return false;
  // validate
  const strN = n.toString();
  let sum = 0;
  for (let i = 0; i < strN.length; i++) {
    sum += +strN[i];
  }
  return sum % 10 === 0;
}
