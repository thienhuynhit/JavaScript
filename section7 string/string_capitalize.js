'use strict';
console.log('Viet ham viet hoa chu cai dau tien');
// huynh tan thien => Huynh tan thien

function chuanHoaChuoi(sName) {
  if (sName.length === 0) return '';
  const firstLetter = sName.slice(0, 1).toUpperCase();
  const letters = sName.slice(1).toLowerCase();
  return `${firstLetter}${letters}`;
}
console.log(chuanHoaChuoi('huynh Tan thien'));
