export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents.filter((stu) => stu.location === city).map((stu) => {
    newGrades.forEach((v) => {
      if (v.studentId === stu.id) Object.assign(stu, { grade: v.grade });
    });
    /* stu.grade = stu?.grade ?? 'N/A'; */
    if (!stu.grade) Object.assign(stu, { grade: 'N/A' });
    return stu;
  });
}
