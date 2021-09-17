// NUMBER-02: Kiểm tra số giảm dần
// Viết hàm isDecreasingNumber(n) để kiểm tra n có phải là số giảm dần hay không?
// 0 < n < 1000000
// Số giảm dần có ít nhất 2 chữ số
// Chữ số bên phải luôn nhỏ hơn chữ số bên trái
// Trả về true nếu là số giảm dần, ngược lại trả về false.
// Ví dụ:
// isDecreasingNumber(11) --> false
// isDecreasingNumber(321) --> true
// isDecreasingNumber(12321) --> false
export const isDecreasingNumber = (n) => {
  if (n < 10 || n >= 1000000) return false;
  if (n % 1 > 0 && n % 1 < 1) return false;
  //  validate n
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    if (+str[i] >= +str[i - 1]) return false;
  }
  return true;
};
