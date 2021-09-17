// NUMBER-06: Kiểm tra số hoàn hảo
// Viết hàm isPerfectNumber(n) để kiểm tra n có phải là số hoàn hảo hay không?
// Với n thoả điều kiện 1 < n < 1000
// Số hoàn hảo là số mà tổng của tất cả ước số (không tính chính nó, tức từ 1 đến n - 1) bằng chính nó.
// Trả về true nếu đúng, ngược lại trả về false
// Ví dụ: 6 = 1 + 2 + 3 (như vậy 6 là một số hoàn hảo)
// Gợi ý: không nhất thiết phải chạy tới (n - 1) để tìm ra tất cả các ước số của n
export function isPerfectNumber(n) {
  if (n <= 1 || n >= 1000) return false;
  if (n % 1 > 0 && n % 1 < 1) return false;
  // validate
  const sqrtN = Math.sqrt(n);
  let sum = 0;
  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      sum += i;
      if (sqrtN * i !== n) sum += n / i;
    }
  }
  return sum / 2 === n;
}
