interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1 = {
  firstName: 'John',
  lastName: 'Snow',
  age: 21,
  location: 'Lagos mainland',
};

const student2 = {
  firstName: 'Alan',
  lastName: 'Walker',
  age: 27,
  location: 'Rayfield estate',
};

const studentList: Array<Student> = [student1, student2];

const renderStudents = (studentList: Student[]) => {
  console.log('FirstName | Location');
  for (const student of studentList) {
    console.log(student.firstName + ' '.repeat(8) + student.location);
  }
};

renderStudents(studentList);
