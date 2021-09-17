// ARRAY-CHECK-07: Kiểm tra có student giới tính là Nữ tên Alice không
// Viết hàm hasAlice(studentList) để kiểm tra trong mảng studentList có student nữ nào tên là Alice không?
// (không phân biệt hoa thường)
// const studentList = [
//     { id: 1, name: 'Alice', gender: 'male' },
//     { id: 2, name: 'aliCE', gender: 'female' },
//     { id: 3, name: 'Easy Frontend', gender: 'male' },
//     ];
//     hasAlice(studentList); // true
export function hasAlice(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;
  // validate studentList
  let result = false;
  studentList.forEach((x) => {
    if (x.name.toLowerCase() === 'alice' && x.gender === 'female') result = true;
  });
  return result;
}
// chu y forEach ko the break dc nen phai dung co
// viet lai dung for i
// viet lai dung find
// viet lai dung findIndex reccommend
// viet lai dung filter
