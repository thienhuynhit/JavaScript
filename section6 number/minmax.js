'use strict';
// convert hours to seconds
function convertHoursToSeconds(hours) {
  if (hours < 0) return -1;
  // must given the name for const variable
  const SECONDS_PER_HOURS = 3600;
  return hours * SECONDS_PER_HOURS;
}
console.log(convertHoursToSeconds(2));
//ham tim max trong 3 so
function findMax(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}
console.log(findMax(12, 4, 5));
// ham tim max
function findMaxEvenNumber(a, b, c) {
  let max = Number.NEGATIVE_INFINITY;
  if (a % 2 === 0 && a > max) max = a;
  if (b % 2 === 0 && b > max) max = b;
  if (c % 2 === 0 && c > max) max = c;
  return max;
}
console.log(findMaxEvenNumber(1, 4, 5));
