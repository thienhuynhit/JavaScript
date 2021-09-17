// Viết hàm isIncreasingNumber(n) để kiểm tra n có phải là số tăng dần hay không?
// 0 < n < 1000000
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Trả về true nếu là số tăng dần, ngược lại trả về false.
// Ví dụ:
// isIncreasingNumber(11) --> false
// isIncreasingNumber(123) --> true
// isIncreasingNumber(12321) --> false
export function isIncreasingNumber(n) {
  if (n < 10 || n >= 1000000) return false;
  if (n % 1 > 0 && n % 1 < 1) return false;
  //  validate
  if (n % 10 === 0) return false;
  const nToString = n.toString();

  for (let i = 0; i < nToString.length; i++) {
    if (+nToString[i] >= +nToString[i + 1]) return false;
  }
  return true;
}
// console.log(isIncreasingNumber(12345));
