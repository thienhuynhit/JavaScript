'use strict';
console.log('cac bai tap da giai');

// bai tap 1
//xoa cac nguyen am eu oai trong str giai dinh moi nguyen am chi xuat hien 1 lan trong chuoi va trim str do
function removeVowel(str) {
  if (str.length === 0) return '';
  // your code here
  return str
    .replace('u', '')
    .replace('e', '')
    .replace('o', '')
    .replace('a', '')
    .replace('i', '')
    .trim();
}
console.log(removeVowel('huynh tan thien'));

// bai tap 2 chuan hoa dong ho cho vao so giay chuyên 00
// using if...else
function formatSecondsV1(seconds) {
  if (seconds >= 60 || seconds < 0) return '00';
  // your code here
  if (seconds < 10) return `0${seconds}`;
  return `${seconds}`;
}

// using slice()
function formatSecondsV2(seconds) {
  if (seconds >= 60 || seconds < 0) return '00';
  // your code here
  if (seconds < 10) return '0' + seconds.toString().slice(-1);
  return seconds.toString().slice(-2);
}
console.log(formatSecondsV2(23));

// bai tap 3 nhap vao so seconds va chuyen thanh dinh dang hh:mm:ss
// please try to use these constants in your code
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
  if (seconds < 0 || seconds > 86400) return '00:00:00';
  // your code here
  const hours = Math.trunc(seconds / SECONDS_PER_HOUR);
  const mins = Math.trunc((seconds % SECONDS_PER_HOUR) / SECONDS_PER_MIN);
  const secondsLeft =
    seconds - hours * SECONDS_PER_HOUR - mins * SECONDS_PER_MIN;

  let strHours = `${hours}`;
  let strMins = `${mins}`;
  let strSeconds = `${secondsLeft}`;

  if (hours < 10) strHours = `0${hours}`;
  if (mins < 10) strMins = `0${mins}`;
  if (secondsLeft < 10) strSeconds = `0${secondsLeft}`;
  return `${strHours}:${strMins}:${strSeconds}`;
}

console.log(formatTime(3600));

//bai tap 4
// bai tap kiem tra url co phuong thuc bao mat bat dau bang https hoac wss
// using indexOf()
function isSecureUrlV1(url) {
  if (url.length === 0) return false;
  // your code here
  return url.indexOf('https') >= 0 || url.indexOf('wss') >= 0;
}

// using startsWith()
function isSecureUrlV2(url) {
  if (url.length === 0) return false;
  // your code here
  return url.startsWith('https') || url.startsWith('wss');
}

// bai tap 5
// rut trich domain tu dia chi email
// using split
function extractDomainV1(email) {
  if (email.length === 0) return '';
  // your code here
  if (email.indexOf('@') < 0) return '';
  const arrayDomain = email.split('@');
  return arrayDomain[arrayDomain.length - 1];
}

// using indexOf() and slice()
function extractDomainV2(email) {
  if (email.length === 0) return '';
  // your code here
  if (email.indexOf('@') < 0) return '';
  return email.slice(email.indexOf('@') + 1);
}

// bai tap 6
// truy tim mat ma xoa cac chu in hoa
function findSecret(code) {
  if (code.length === 0) return '';
  // your code here
  let str = '';
  for (let i = 0; i < code.length; i++) {
    if (code[i] !== code[i].toUpperCase()) str += code[i];
  }
  return str;
}
console.log(findSecret('HthieNn'));

// bai tap 7
// tra ve full name khi biet first va last name
function getFullName(firstName, lastName) {
  // your code here

  let firstNameDone = '';
  let lastNameDone = '';
  let fullName = '';
  if (firstName) {
    if (firstName.split(' ').length > 1) {
      const words = firstName.split(' ');
      console.log(words);
      for (let i = 0; i < words.length; i++) {
        const upperCaseFirstName = words[i].slice(0, 1).toUpperCase().trim();
        const firstNameLeft = words[i].slice(1).toLowerCase().trim();
        firstNameDone += `${upperCaseFirstName}${firstNameLeft} `;
      }
    } else {
      const upperCaseFirstName = firstName.slice(0, 1).toUpperCase().trim();
      const firstNameLeft = firstName.slice(1).toLowerCase().trim();
      firstNameDone = `${upperCaseFirstName}${firstNameLeft}`;
    }
  }
  if (lastName) {
    if (lastName.split(' ').length > 1) {
      const words = lastName.split(' ');
      // console.log(words);
      for (let i = 0; i < words.length; i++) {
        const upperCaseLastName = words[i].slice(0, 1).toUpperCase().trim();
        const lastNameLeft = words[i].slice(1).toLowerCase().trim();
        lastNameDone += `${upperCaseLastName}${lastNameLeft} `;
      }
    } else {
      const upperCaseLastName = lastName.slice(0, 1).toUpperCase().trim();
      const lastNameLeft = lastName.slice(1).toLowerCase().trim();
      lastNameDone = `${upperCaseLastName}${lastNameLeft}`;
    }
  }

  fullName = `${firstNameDone.trim()} ${lastNameDone.trim()}`;

  return fullName.trim();
}
console.log(
  getFullName('huynh', 'thien'),
  getFullName('huynh', 'thien').length
);
// console.log(getFullName(' ', 'thiEn'), getFullName(' ', 'thiEn').length);
// console.log(getFullName('hUynh', ' '), getFullName('hUynh', ' ').length);
// console.log(getFullName('thien'));
// console.log(getFullName('jonh     pham'), getFullName('jonh     pham').length);
