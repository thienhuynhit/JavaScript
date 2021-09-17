// ARRAY-FIND-09: Tìm vị trí của student có id cho trước
// Viết hàm findStudentByIdV2(studentList, studentId) để tìm ra vị trí của student có id bằng với studentId.
// const studentList = [
// { id: 1, name: 'Easy' },
// { id: 2, name: 'Frontend' },
// ]
// findStudentById(studentList, 1); // 0
// findStudentById(studentList, 3); // -1
import { findStudentById, findStudentByIdV2, findStudentByIdV3 } from './array-find-09';
describe('check findStudentById()', () => {
  test('should validate studentList and studentId', () => {
    expect(findStudentById([], -1)).toBe(-1);
    expect(findStudentById([], 0)).toBe(-1);
    expect(findStudentById({}, -1)).toBe(-1);
    expect(findStudentById('', 8)).toBe(-1);
    expect(findStudentById([], 8.2)).toBe(-1);
  });
  test("should return false when donn't have student in list ", () => {
    expect(
      findStudentById(
        [
          { id: 1, name: 'thien' },
          { id: 2, name: 'hien' },
        ],
        3
      )
    ).toBe(-1);

    expect(
      findStudentById(
        [
          { id: 4, name: 'thien' },
          { id: 2, name: 'hien' },
        ],
        3
      )
    ).toBe(-1);

    expect(
      findStudentById(
        [
          { id: 6, name: 'thien' },
          { id: 8, name: 'hien' },
        ],
        3
      )
    ).toBe(-1);
  });

  test('should return true', () => {
    expect(
      findStudentById(
        [
          { id: 1, name: 'hung' },
          { id: 2, name: 'trung' },
        ],
        2
      )
    ).toBe(1);

    expect(
      findStudentById(
        [
          { id: 1, name: 'hung' },
          { id: 2, name: 'trung' },
        ],
        1
      )
    ).toBe(0);
  });
});

describe('check findStudentByIdV2()', () => {
  test('should validate studentList and studentId', () => {
    expect(findStudentByIdV2([], -1)).toBe(-1);
    expect(findStudentByIdV2([], 0)).toBe(-1);
    expect(findStudentByIdV2({}, -1)).toBe(-1);
    expect(findStudentByIdV2('', 8)).toBe(-1);
    expect(findStudentByIdV2([], 8.2)).toBe(-1);
  });
  test("should return false when donn't have student in list ", () => {
    expect(
      findStudentByIdV2(
        [
          { id: 1, name: 'thien' },
          { id: 2, name: 'hien' },
        ],
        3
      )
    ).toBe(-1);

    expect(
      findStudentByIdV2(
        [
          { id: 4, name: 'thien' },
          { id: 2, name: 'hien' },
        ],
        3
      )
    ).toBe(-1);

    expect(
      findStudentByIdV2(
        [
          { id: 6, name: 'thien' },
          { id: 8, name: 'hien' },
        ],
        3
      )
    ).toBe(-1);
  });

  test('should return true', () => {
    expect(
      findStudentByIdV2(
        [
          { id: 1, name: 'hung' },
          { id: 2, name: 'trung' },
        ],
        2
      )
    ).toBe(1);

    expect(
      findStudentByIdV2(
        [
          { id: 1, name: 'hung' },
          { id: 2, name: 'trung' },
        ],
        1
      )
    ).toBe(0);
  });
});

describe('check findStudentByIdV3()', () => {
  test('should validate studentList and studentId', () => {
    expect(findStudentByIdV3([], -1)).toBe(-1);
    expect(findStudentByIdV3([], 0)).toBe(-1);
    expect(findStudentByIdV3({}, -1)).toBe(-1);
    expect(findStudentByIdV3('', 8)).toBe(-1);
    expect(findStudentByIdV3([], 8.2)).toBe(-1);
  });
  test("should return false when donn't have student in list ", () => {
    expect(
      findStudentByIdV3(
        [
          { id: 1, name: 'thien' },
          { id: 2, name: 'hien' },
        ],
        3
      )
    ).toBe(-1);

    expect(
      findStudentByIdV3(
        [
          { id: 4, name: 'thien' },
          { id: 2, name: 'hien' },
        ],
        3
      )
    ).toBe(-1);

    expect(
      findStudentByIdV3(
        [
          { id: 6, name: 'thien' },
          { id: 8, name: 'hien' },
        ],
        3
      )
    ).toBe(-1);
  });

  test('should return true', () => {
    expect(
      findStudentByIdV3(
        [
          { id: 1, name: 'hung' },
          { id: 2, name: 'trung' },
        ],
        2
      )
    ).toBe(1);

    expect(
      findStudentByIdV3(
        [
          { id: 1, name: 'hung' },
          { id: 2, name: 'trung' },
        ],
        1
      )
    ).toBe(0);
  });
});
