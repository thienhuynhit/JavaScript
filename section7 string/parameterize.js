'use strict';
console.log('bai tap chuyen chuoi code is fun to code-is-fun');
function parameterize(stringS) {
  if (stringS.length === 0) return '';
  //node js ver 16 moi co
  //   return stringS.trim().toLowerCase().replaceAll(' ', '-');
  return stringS.trim().toLowerCase().split(' ').join('-');
}
console.log(parameterize('Code is really fun!!'));
