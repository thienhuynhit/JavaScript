// viet ham kiem tra isPrimeNumber
export const isPrimeNumber = (n) => {
  if (n <= 1) return false;
  // validate
  const sqrtN = Math.sqrt(n);
  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// viet ham liet ke tat ca cac uoc so cua so nguyen duong n
// gia tri tra ve la 1 mang tang dan
// ex: n>0 and n<=100
// n=0 -> undefinded
// n=1 -> [1]
// n=2 ->[1,2]
// n=4 ->[1,2,4]

export const listDivisionOfN = (n) => {
  if (n <= 0 || n > 100) return undefined;
  // validate
  if (n === 1) return [1];
  const sqrtN = Math.sqrt(n);
  const arr = [];
  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      arr.push(i);
      if (i * sqrtN !== n) arr.push(n / i);
    }
  }
  arr.sort((a, b) => a - b);
  return arr;
};
console.log(listDivisionOfN(98));
