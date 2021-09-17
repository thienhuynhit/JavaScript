// NUMBER-07: Kiểm tra số đối xứng
// Viết hàm isSymetricNumber(n) để kiểm tra n có phải là số đối xứng hay không?
// Với n thoả điều kiện 1 < n < 1000000
// Số đối xứng là số đọc từ trái sang phải cũng giống như đọc từ phải sang trái.
// Trả về true nếu đúng, ngược lại trả về false
// Ví dụ:
// isSymetricNumber(10) --> false
// isSymetricNumber(11) --> true
// isSymetricNumber(12321) --> true
export function isSymetricNumber(n) {
  if (n <= 1 || n >= 1000000) return false;
  if (n % 1 > 0 && n % 1 < 1) return false;
  // validate n
  if (n < 10 || n % 11 === 0) return true;
  const strN = n.toString();
  let str = '';
  for (let i = 1; i <= strN.length; i++) {
    str += strN[strN.length - i];
    console.log(str);
  }
  return +str === n;
}
