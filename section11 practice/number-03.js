// NUMBER-03: Kiểm tra số tăng dần đều theo khoảng cách cho trước
// Viết hàm isIncreasingNumberByDistance(n, x) để kiểm tra n có phải là số tăng dần đều với khoảng cách
// giữa 2 chữ số là x không?
// 0 < n < 1000000, 0 < x < 5
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Khoảng cách của 2 chữ số liền kề là x
// Trả về true nếu là số tăng dần đều theo khoảng cách x, ngược lại trả về false.
// Ví dụ:
// isIncreasingNumberByDistance(11, 1) --> false
// isIncreasingNumberByDistance(123, 1) --> true
// isIncreasingNumberByDistance(135, 2) --> true
// isIncreasingNumberByDistance(135, 1) --> false
export function isIncreasingNumberByDistance(n, x) {
  if (n < 10 || n >= 1000000) return false;
  if (n % 1 > 0 && n % 1 < 1) return false;
  if (x <= 0 || x >= 5) return false;
  if (x % 1 > 0 && x % 1 < 1) return false;
  // validate n,x
  if (n % 10 === 0) return false;
  const str = n.toString();
  for (let i = 0; i < str.length - 1; i++) {
    if (+str[i + 1] - +str[i] !== x || +str[i] > +str[i + 1]) return false;
  }
  return true;
}
