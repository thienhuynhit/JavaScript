// ARRAY-FIND-09: Tìm vị trí của student có id cho trước
// Viết hàm findStudentById(studentList, studentId) để tìm ra vị trí của student có id bằng với studentId.
// const studentList = [
// { id: 1, name: 'Easy' },
// { id: 2, name: 'Frontend' },
// ]
// findStudentById(studentList, 1); // 0
// findStudentById(studentList, 3); // -1
export function findStudentById(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return -1;
  if (studentId < 0) return -1;
  if (studentId % 1 > 0 && studentId % 1 < 1) return -1;
  // validate
  let index = -1;
  studentList.forEach((student, idx) => {
    if (student.id === studentId) index = idx;
  });
  return index;
}

// dung find index
export function findStudentByIdV2(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return -1;
  if (studentId < 0) return -1;
  if (studentId % 1 > 0 && studentId % 1 < 1) return -1;
  // validate
  const result = studentList.findIndex((student) => student.id === studentId);
  return result >= 0 ? result : -1;
}
// dung reduce
export function findStudentByIdV3(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return -1;
  if (studentId < 0) return -1;
  if (studentId % 1 > 0 && studentId % 1 < 1) return -1;
  // validate
  return studentList.reduce((index, student, idx) => {
    if (student.id === studentId) index = idx;
    return index;
  }, -1);
}
