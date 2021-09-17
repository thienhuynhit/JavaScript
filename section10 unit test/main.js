// viet ham kiem tra isPrimeNumber
const isPrimeNumber = (n) => {
  if (n <= 1) return false;
  // validate
  const sqrtN = Math.sqrt(n);
  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

export default isPrimeNumber;
