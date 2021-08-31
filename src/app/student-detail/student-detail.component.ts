import { WeakStudentService } from './../weak-student.service';
import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() student: Student | undefined;

  constructor(private weakStudent: WeakStudentService) { }

  ngOnInit(): void {
  }

  addToWeakStudents(student: Student){
    this.weakStudent.addToWeakStudents(student);
    window.alert(student.studentName + " has been added to weak students");
  }

}
