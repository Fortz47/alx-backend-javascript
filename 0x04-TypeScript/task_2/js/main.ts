/** Task 5 */

interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string,
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string,
}

class Director implements DirectorInterface {
  workFromHome() { return 'Working from home'; }

  getCoffeeBreak() { return 'Cannot have a break'; }

  getToWork() { return this.getCoffeeBreak(); }

  workDirectorTasks() { return 'Getting to director tasks' }
}

class Teacher implements TeacherInterface {
  workFromHome() { return 'Cannot work from home'; }

  getCoffeeBreak() { return 'Cannot have a break'; } 

  workTeacherTasks() { return 'Getting to work'; }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher;
  }
  return new Director;
}

/** Task 6 */

function isDirector(employee: Director): void {
  void employee;
}

function executeWork(employee: Director | Teacher) {
  if (employee instanceof Director) console.log(employee.workDirectorTasks());
  else console.log(employee.workTeacherTasks());
}

/** Task 7 */

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') return 'Teaching Math';
  else return 'Teaching History';
}
