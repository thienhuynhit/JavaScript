'use strict';
//ôn tập truthy and falsy value
// danh sach cac falsy: 0 ,-0, 0n, "", null, undefined, Nan, Document.all
// ngoai ra bat ky cac object hay array nao khi chuyen qua boolean deu la truthy
// khi so sanh 2 chuoi thi se chuyen qua number va so sanh
console.log('a' == 'a');
console.log(null == undefined); // null chi bang undefined
console.log(null >= ''); // luon luon true
// khi dung type of nho chu y type of null = object
console.log(typeof null);
