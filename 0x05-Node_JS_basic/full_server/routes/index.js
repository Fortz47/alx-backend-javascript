#!/usr/bin/node

import { AppController } from "../controllers/AppController";
import { StudentsController } from "../controllers/StudentsController";

export class Routes {
  static getRoutes() {
    return {
      '/': AppController.getHomepage,
      '/students': StudentsController.getAllStudents,
      '/students/:major': StudentsController.getAllStudentsByMajor
    }
  }
}
