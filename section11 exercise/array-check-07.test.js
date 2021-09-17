// ARRAY-CHECK-07: Kiểm tra có student giới tính là Nữ tên Alice không
// Viết hàm hasAlice(studentList) để kiểm tra trong mảng studentList có student nữ nào tên là Alice không?
// (không phân biệt hoa thường)
// const studentList = [
//     { id: 1, name: 'Alice', gender: 'male' },
//     { id: 2, name: 'aliCE', gender: 'female' },
//     { id: 3, name: 'Easy Frontend', gender: 'male' },
//     ];
//     hasAlice(studentList); // true
import { hasAlice } from './array-check-07';
describe('check hasAlice(studentList)', () => {
  test('should validate studentList', () => {
    [{}, '', []].forEach((x) => {
      expect(hasAlice(x)).toEqual(false);
    });
  });
  test('should return false when student List don n\t have alice  ', () => {
    expect(
      hasAlice([
        { id: 1, name: 'hoa', gender: 'male' },
        { id: 2, name: 'ha', gender: 'male' },
      ])
    ).toEqual(false);
    expect(
      hasAlice([
        { id: 1, name: 'Hien', gender: 'female' },
        { id: 2, name: 'hao', gender: 'male' },
      ])
    ).toEqual(false);
  });
  test('should return true when studenList have alice', () => {
    expect(
      hasAlice([
        { id: 1, name: 'Alice', gender: 'female' },
        { id: 2, name: 'hao', gender: 'male' },
      ])
    ).toEqual(true);
    expect(
      hasAlice([
        { id: 1, name: 'alice', gender: 'female' },
        { id: 2, name: 'hieu', gender: 'male' },
      ])
    ).toEqual(true);
  });
});
