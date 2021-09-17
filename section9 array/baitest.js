'use strict';
// bai 1 tao mang [a,b]
// using for...i
function createArrayInRangeV1(a, b) {
  if (a > b || a <= -100 || b >= 100) return undefined;
  // your code here
  const newArr = [];
  newArr[0] = a;
  const lengthList = b - a + 1;
  for (let i = 1; i < lengthList; i++) {
    newArr.push(a + i);
  }
  return newArr;
}
console.log(createArrayInRangeV1(1, 5));
// using Array.from()
function createArrayInRangeV2(a, b) {
  if (a > b || a <= -100 || b >= 100) return undefined;
  // your code here
  const lengthList = b - a + 1;
  const newArr = Array(lengthList).fill(a);

  return Array.from(newArr, (element, idx) => element + idx);
}
console.log(createArrayInRangeV2(1, 5));

//  bai 2
// viet ham kiem tra so nguyen to
function isPrimeV1(n) {
  if (n <= 0 || n >= 1000 || n === 1) return false;
  // your code here
  for (let i = 2; i < n - 1; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrimeV1(12));
console.log(isPrimeV1(7));
// Using loop from 2 to square root of n
function isPrimeV2(n) {
  if (n <= 0 || n >= 1000 || n === 1) return false;
  // your code here
  const sqrtN = Math.sqrt(n);
  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrimeV2(12));
console.log(isPrimeV2(13));

// bai 3 liet ke tat ca cac uoc so cua n va tra ve 1 mang
// using for...i to loop from 1 to n
function getDivisorListV1(n) {
  if (n < 1 || n > 1000) return undefined;
  // your code here
  const newArr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) newArr.push(i);
  }
  return newArr;
}
// console.log(getDivisorListV1(6));
// using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
  if (n < 1 || n > 1000) return undefined;
  // your code here
  const newArr = Array(n).fill(1);
  const arr = Array.from(newArr, (x, idx) => x + idx).filter((x) => n % x === 0);
  return arr;
}
// console.log(getDivisorListV2(9));
// using Array.from(), forEach and sort() but loop from 1 to square root of n only
function getDivisorListV3(n) {
  if (n < 1 || n > 1000) return undefined;
  if (n === 1) return [1];
  // your code here
  const sqrtN = Math.trunc(Math.sqrt(n));
  console.log(sqrtN);
  const newArr = Array(sqrtN).fill(1);
  const arr = Array.from(newArr, (x, idx) => x + idx);
  const arr1 = [];
  arr.forEach((element) => {
    if (n % element === 0) {
      arr1.push(element);
      if (sqrtN * element !== n) arr1.push(n / element);
    }
  });
  arr1.sort((a, b) => a - b);
  return arr1;
}
console.log(getDivisorListV3(25));
console.log(getDivisorListV3(10));

// bai tap4
// so hoan hao la so ma tong tat ca cac so ko tinh chinh no bang no 6 = 1+2+3
function isPerfectNumber(n) {
  if (n <= 1 || n >= 1000) return false;
  // your code here
  const sqrtN = Math.sqrt(n);
  const arr = [];
  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      arr.push(i);
      if (i * sqrtN !== n) arr.push(n / i);
    }
  }
  let sum = 0;
  arr
    .filter((x) => x !== n)
    .forEach((element) => {
      sum += element;
    });
  return sum === n;
}
console.log(isPerfectNumber(6));

// bai tap 5 viet ham bien doi mang

// using for...i
function transformNumbersV1(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  // processing...
  if (numberList.length === 0) return [];
  if (numberList.length === 1) return [...numberList];
  if (numberList.length === 2) {
    const [a, b] = numberList;
    return [b, a];
  }
  // coding ...
  const newArr = [];
  newArr[0] = numberList[1];
  for (let i = 1; i < numberList.length - 1; i++) {
    // do something...
    newArr[i] = numberList[i - 1] + numberList[i + 1];
  }
  newArr.push(numberList[numberList.length - 2]);
  return newArr;
}
console.log(transformNumbersV1([1, 2]));
console.log(transformNumbersV1([1, 2, 3]));
console.log(transformNumbersV1([2, 4, 6, 8]));
// using forEach()
function transformNumbersV2(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  // processing...
  if (numberList.length === 0) return [];
  if (numberList.length === 1) return [...numberList];
  if (numberList.length === 2) {
    const [a, b] = numberList;
    return [b, a];
  }
  // coding ...
  const newArr = [];
  newArr[0] = numberList[1];
  numberList.forEach((element, idx) => {
    if (idx > 0 && idx < numberList.length - 1) {
      newArr[idx] = numberList[idx - 1] + numberList[idx + 1];
    }
  });
  newArr.push(numberList[numberList.length - 2]);
  return newArr;
}
console.log(transformNumbersV2([2, 4, 6, 8]));
// using map()
function transformNumbersV3(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  // processing...
  if (numberList.length === 0) return [];
  if (numberList.length === 1) return [...numberList];
  if (numberList.length === 2) {
    const [a, b] = numberList;
    return [b, a];
  }
  // coding ...
  const arr = numberList.map((value, idx) => {
    if (idx === 0) return numberList[1];
    if (idx < numberList.length - 1) {
      return numberList[idx - 1] + numberList[idx + 1];
    }
    return numberList[numberList.length - 2];
  });

  return arr;
}
console.log(transformNumbersV3([2, 4, 6, 8]));

//bai tap 6 kiem tra so nguyen to
function isPrimeNumber(n) {
  if (n <= 1) return false;
  const sqrtN = Math.sqrt(n);
  for (let i = 2; i <= sqrtN + 1; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// console.log(isPrimeNumber(17));
//  for...i
function hasPrimeV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  // your code here

  for (let i = 0; i < numberList.length; i++) {
    if (isPrimeNumber(numberList[i])) return true;
  }
  return false;
}
// console.log(hasPrimeV1([1, 4, 4, 6]));
//  forEach
function hasPrimeV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  // your code here
  if (numberList.length === 1) return isPrimeNumber(numberList[0]);
  let check = false;
  numberList.forEach((element) => {
    if (isPrimeNumber(element)) check = true;
  });
  return check;
}
console.log(hasPrimeV2([11]));
console.log(hasPrimeV2([0, 1, 4, 6]));
//  find
function hasPrimeV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  // your code here
  return !!numberList.find((x) => isPrimeNumber(x));
}
console.log(hasPrimeV3([1, 4, 4, 6]));
//  findIndex
function hasPrimeV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  // your code here
  return numberList.findIndex((x) => isPrimeNumber(x)) >= 0;
}
console.log(hasPrimeV4([1, 4, 4, 6]));
//  some
function hasPrimeV5(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  // your code here
  return numberList.some((x) => isPrimeNumber(x));
}
console.log(hasPrimeV5([2]));

// bai tap 7
// kiem tra so hoan hao
function isPerfectNumber(n) {
  if (n <= 1 || n >= 1000) return false;
  // your code here
  const sqrtN = Math.sqrt(n);
  const arr = [];
  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      arr.push(i);
      if (i * sqrtN !== n) arr.push(n / i);
    }
  }
  let sum = 0;
  arr
    .filter((x) => x !== n)
    .forEach((element) => {
      sum += element;
    });
  return sum === n;
}

// cac ham
// for...i: return false if found number is not perfect
function isAllPerfectNumbersV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  // your code here
  for (let i = 0; i < numberList.length; i++) {
    if (!isPerfectNumber(numberList[i])) return false;
  }
  return true;
}

// reduce: check if the number of perfect numbers is equal to length
// optional: you can practice more to use forEach or filter :)
function isAllPerfectNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  // your code here
  if (numberList.length === 1) return isPerfectNumber(numberList[0]);
  const numberAll = numberList.reduce((totalNumber, n, idx) => (isPerfectNumber(n) ? totalNumber + 1 : totalNumber), 0);
  console.log(numberAll);
  return numberAll === numberList.length;
}
console.log(isAllPerfectNumbersV2([6, 6]));
// every
function isAllPerfectNumbersV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  // your code here
  return numberList.every((x) => isPerfectNumber(x));
}

// bai tap 8
function calcAvgOfAllEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  // your code here
  let sum = 0;
  let count = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
      sum += numberList[i];
      ++count;
    }
  }
  if (count === 0) return 0;
  return Math.round(sum / count);
}
