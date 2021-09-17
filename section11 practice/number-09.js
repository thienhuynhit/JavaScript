// NUMBER-09: Kiểm tra số có tổng của 2 chữ số bằng số cho trước
// Viết hàm hasTwoDigitsWithSum(n, sum) để kiểm tra n (9 < n < 1000000) có chứa 2 chữ số bất kỳ nào có
// tổng bằng sum (0 < sum < 19) cho trước không?
// Ví dụ:
// hasTwoDigitsWithSum(10, 1) --> true vì 0 + 1 = 1
// hasTwoDigitsWithSum(101, 3) --> false vì không có 2 chữ số nào cộng lại bằng 3
// hasTwoDigitsWithSum(11, 2) --> true
export function hasTwoDigitsWithSum(n, sum) {
  if (n < 10 || n >= 1000000) return false;
  if (n % 1 > 0 && n % 1 < 1) return false;

  if (sum <= 0 || sum >= 19) return false;
  if (sum % 1 > 0 && n % 1 < 1) return false;
  // validate
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (+str[i] + +str[j + 1] === sum) return true;
    }
  }
  return false;
}
