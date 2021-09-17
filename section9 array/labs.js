'use strict';
const numberList = [1, 2, 3];
//  khi can dung den index hoac xu ly nhieu buoc lien tuc su dung for each
numberList.forEach((x, index) => console.log(index, x));

for (const x of numberList.entries()) {
  console.log(x);
}

// them push() va xoa pop() phtu cuoi mang mang
const numberList1 = [1, 2, 3];
numberList1.push(4, 5);
console.log(numberList1);
// xoa phan tu cuoi mang
const numberDelected = numberList1.pop();
console.log(numberList1, 'ptu da xoa ', numberDelected);

// them unshift() va xoa shift() phtu dau mang mang
const numberList = [1, 2, 3];
numberList.unshift(0);
console.log(numberList);
numberList.shift();
console.log(numberList);

// them xoa phan tu giua mang bat ky splice(index,so ptu can xoa, ptu them vao)
const numberList = [1, 2, 3];
// numberList.splice(0, 0, 0);
// console.log(numberList);
numberList.splice(3, 0, 4, 5);
console.log(numberList);

//kiem tra ton tai cua ptu
// every tat ca cac ptu thoa dk thi tra ve true
const isEvenList = [2, 4, 6].every((x) => x % 2 === 0);
console.log(isEvenList);
//some check all ptu neu co 1 ptu thoa dk se true
const isEmail = ['tanthien.h@samsung.com', 'tanthien'].some(
  (x) => x.includes('@') === true
);
console.log(isEmail);

//indexOf() ham tra ve vi tri dau tien
console.log([1, 2, 3].indexOf(1));
console.log([1, 2, 1].lastIndexOf(1));
console.log([1, 2, 3, 4].includes(5));

// ham tim kiem phtu va tim kiem index
console.log([1, 2, 3].find((x) => x % 2 === 0));
console.log([1, 2, 3].findIndex((x) => x % 2 === 0));

// callback la gi: la 1 ham la args cua 1 ham khac
function inkq(kq) {
  console.log('ket qua la ', kq);
}
const sum = (a, b, inkq) => {
  inkq(a + b);
};
sum(12, 4, inkq);

// map() bien doi mang
const menuList = ['banh mi', 'com chien'];
const newMenu = menuList.map((x) => `Bua sang: ${x}`);
console.log(newMenu);

// filter() loc mang thoa dk

const numberList = [1, 3, 5, 7];
const kq = numberList.filter((x) => x >= 3);
console.log(kq);
