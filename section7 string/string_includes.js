'use strict';
console.log('viet ham kiem tra email @gmail.com');
function isEmail(emailAddress) {
  return emailAddress.trim().toLowerCase().includes('@gmail.com');
  //   return emailAddress.trim().toLowerCase().indexOf('@gmail.com') > 0;
}
console.log(isEmail('tanthien.it@gmail.com'));
console.log(isEmail('tanthien.it@samsung.com'));
