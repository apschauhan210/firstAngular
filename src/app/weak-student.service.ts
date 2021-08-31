import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class WeakStudentService {

  weakStudents: Student[] = [];

  constructor() { }

  addToWeakStudents(student: Student) {
    this.weakStudents.push(student);
  }

  getWeakStudents() {
    return this.weakStudents;
  }

  clearWeakStudents() {
    this.weakStudents = [];
    return this.weakStudents;
  }
}
