'use strict';
//  reduce() function

const numberList = [1, 2, 3, 4, 5];
const tong = numberList.reduce((sum, n, idx) => (idx % 2 === 0 ? sum + n : sum), 0);
// trong do sum la ket qua cua buoc truoc do
// n la gia tri value hien tai
// idx la index hien tai
// 0 la inital value
console.log(tong);
