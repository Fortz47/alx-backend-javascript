/// <reference path='Teacher.ts' />

namespace Subjects {

  export class Subject {
    teacher: Teacher;
    set setTeacher(arg: Teacher): void {
      this.teacher = arg;
    }
  }
}
