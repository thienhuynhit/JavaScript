'use strict';
console.log("so now let's talk about object");
console.log(
  'bai tap viet ham clone object ko dung spread operator va Object.assign(target,source)'
);
function cloneObject(obj) {
  if (!obj) return {};
  // your code here
  const newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}

// bai tap 2
// kiem tra 2 obj co bang nhau ko
function isEqual(obj1, obj2) {
  if (!obj1 || !obj2) return false;
  //code here
  let result = true;
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    const keyCount = Object.keys(obj1).length;
    const keyList1 = Object.keys(obj1);
    const keyList2 = Object.keys(obj2);
    for (let i = 0; i < keyCount; i++) {
      if (obj1[keyList1[i]] !== obj2[keyList2[i]]) result = false;
    }
  } else {
    result = false;
  }
  return result;
}
