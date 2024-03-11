export default function getStudentIdsSum(studentList) {
  return studentList.reduce((acc, cur) => acc + cur.id, 0);
}
