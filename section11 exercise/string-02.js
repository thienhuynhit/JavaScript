// STRING-02: Thống kê số lượng từ trong câu
// Viết hàm statisticsWords(str) để đếm tần số xuất hiện của môi từ trong str.
// Trả về một object với:
// key là từ có xuất hiện trong str
// value là số lần xuất hiện của key
// "thien huynh thien" -> {thien:2 , huynh:1}
export function statisticsWords(str) {
  if (typeof str !== 'string') return {};
  if (str.length === 0) return {};
  //   validate
  const result = {};
  const listWords = str.trim().split(' ');
  const arr = [];
  listWords.forEach((x) => {
    if (x !== '') arr.push(x);
  });
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (key === arr[j]) count++;
    }
    result[key] = count;
    count = 0;
  }
  return result;
}

// viet lai ham voi split=>filter=>forEach
export const statisticsWordsv2 = (str) => {
  if (typeof str !== 'string' || str.length === 0) return {};
  //   validate
  const words = {};
  str
    .split(' ')
    .filter((x) => x !== '')
    .forEach((x) => {
      words[x] = words[x] ? words[x] + 1 : 1;
    });
  return words;
};
// split=>filter=>reduce luu y ham reduce return
export const statisticsWordsv3 = (str) => {
  if (typeof str !== 'string' || str.length === 0) return {};

  return str
    .split(' ')
    .filter((x) => x !== '')
    .reduce((result, word) => {
      result[word] = result[word] ? result[word] + 1 : 1;
      return result;
    }, {});
};
