// NUMBER-04: Kiểm tra số nguyên tố
// Viết hàm isPrime(n) để kiểm tra n có phải là số nguyên tố không?
// Số nguyên tố là số chỉ chia hết cho 1 và chính nó.
// 0 < n < 100000
// Trả về true nếu là số nguyên tố, ngược lại trả về false.
// Ví dụ:
// isPrime(3) --> true
// isPrime(4) --> false
// isPrime(11) --> true
export const isPrime = (n) => {
  if (n <= 1 || n >= 100000) return false;
  if (n % 1 > 0 && n % 1 < 1) return false;
  // validate
  if (n === 2) return true;
  const sqrtN = Math.sqrt(n);
  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
