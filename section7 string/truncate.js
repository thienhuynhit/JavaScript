'use strict';
console.log(
  'viet ham truncate neu chuoi vuot qua maxlength thi hien thi duoi dang +ellipsis character'
);
console.log('ex: thien 3 =>thi...');
function truncate(content, maxLength) {
  if (content.trim().length === 0 || maxLength <= 0) return '';
  if (content.trim().length <= maxLength) return content.trim();
  const shortStr = content.trim().slice(0, maxLength - 1);
  return `${shortStr}\u2026`;
}

console.log(truncate('huynh tan thien', 5));
console.log(truncate('huynh', 5));
