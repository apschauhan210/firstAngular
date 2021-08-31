import { students } from './../studentList';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentsList = students;
  selectedStudent!: Student;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(student: Student): void { 
    this.selectedStudent = student;
  }

  onDetails(student: Student) {
    window.alert("Character of " + student.studentName + " is " + student.character);
  }

}
