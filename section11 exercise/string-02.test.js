// STRING-02: Thống kê số lượng từ trong câu
// Viết hàm statisticsWords(str) để đếm tần số xuất hiện của môi từ trong str.
// Trả về một object với:
// key là từ có xuất hiện trong str
// value là số lần xuất hiện của key
// "thien huynh thien" -> {thien:2 , huynh:1}
import { statisticsWords, statisticsWordsv2, statisticsWordsv3 } from './string-02';
describe('check statisticsWords', () => {
  test('should validate str', () => {
    expect(statisticsWords('')).toEqual({});
    expect(statisticsWords([])).toEqual({});
    expect(statisticsWords({})).toEqual({});
  });
  test('should return the object', () => {
    expect(statisticsWords('  thien     huynh    thien')).toEqual({ thien: 2, huynh: 1 });
    expect(statisticsWords('mua   he trong   toi')).toEqual({ mua: 1, he: 1, trong: 1, toi: 1 });
    expect(statisticsWords('viet   nam   nam')).toEqual({ viet: 1, nam: 2 });
    expect(statisticsWords('toi la   toi em   la   ai  ')).toEqual({ toi: 2, la: 2, em: 1, ai: 1 });
  });
});

describe('check statisticsWordsv2', () => {
  test('should validate str', () => {
    expect(statisticsWordsv2('')).toEqual({});
    expect(statisticsWordsv2([])).toEqual({});
    expect(statisticsWordsv2({})).toEqual({});
  });
  test('should return the object', () => {
    expect(statisticsWordsv2('  thien     huynh    thien')).toEqual({ thien: 2, huynh: 1 });
    expect(statisticsWordsv2('mua   he trong   toi')).toEqual({ mua: 1, he: 1, trong: 1, toi: 1 });
    expect(statisticsWordsv2('viet   nam   nam')).toEqual({ viet: 1, nam: 2 });
    expect(statisticsWordsv2('toi la   toi em   la   ai  ')).toEqual({ toi: 2, la: 2, em: 1, ai: 1 });
  });
});

describe('check statisticsWordsv3', () => {
  test('should validate str', () => {
    expect(statisticsWordsv3('')).toEqual({});
    expect(statisticsWordsv3([])).toEqual({});
    expect(statisticsWordsv3({})).toEqual({});
  });
  test('should return the object', () => {
    expect(statisticsWordsv3('  thien     huynh    thien')).toEqual({ thien: 2, huynh: 1 });
    expect(statisticsWordsv3('mua   he trong   toi')).toEqual({ mua: 1, he: 1, trong: 1, toi: 1 });
    expect(statisticsWordsv3('viet   nam   nam')).toEqual({ viet: 1, nam: 2 });
    expect(statisticsWordsv3('toi la   toi em   la   ai  ')).toEqual({ toi: 2, la: 2, em: 1, ai: 1 });
  });
});
