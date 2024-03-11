export default function getStudentsByLocation(studentList, city) {
  return studentList.filter((val) => val.location === city);
}
