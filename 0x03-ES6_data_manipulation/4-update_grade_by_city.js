export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents.filter((stu) => stu.location === city).map((stu) => {
    newGrades.forEach((v) => {
      if (v.studentId === stu.id) stu.grade = v.grade;
    });
    stu.grade = stu?.grade ?? 'N/A';
    return stu;
  });
}
