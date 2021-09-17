// LOGIC-04: Tìm số có số lần xuất hiện nhiều nhất
// Viết hàm findMostFrequentNumber(numberList) tìm số có số lần xuất hiện nhiều nhất trong mảng
// numberList, trường hợp có nhiều số cùng tần số xuất hiện thì trả về số đầu tiên.
// findMostFrequentNumber([1]); // 1
// findMostFrequentNumber([1, 2, 3, 2]); // 2
// findMostFrequentNumber([1, 2, 3, 2, 3, 4]); // 2
export function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  // validate
  if (numberList.length === 1) return numberList[0];
  const arr = [];
  numberList.forEach((number, idx) => {
    const objectNumber = {};
    objectNumber['number'] = number;
    objectNumber['index'] = idx;
    objectNumber['count'] = numberList.filter((x) => x === number).length;
    arr.push(objectNumber);
  });
  arr.sort((a, b) => a.count - b.count);
  const n = arr.filter((a) => a.count === arr[arr.length - 1].count).sort((a, b) => a.index - b.index);
  return n[0].number;
}

export function findMostFrequentNumberV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  const statistics = {};
  let maxKey = undefined;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    // update statistics
    statistics[number] = statistics[number] === undefined ? 1 : statistics[number] + 1;
    // check maxKey
    if (maxKey === undefined || statistics[number] > statistics[maxKey]) {
      maxKey = number;
    }
  }
  return Number.parseInt(maxKey);
}
