/// <reference path='Teacher.ts' />
/// <reference path='Subject.ts' />

namespace Subjects {

  interface Teacher {
    experienceTeachingReact?: number,
  }

  export class React extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher() {
      if (this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else return 'No available teacher';
    }
  }
}
