import { WeakStudentService } from './../weak-student.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-weak-students',
  templateUrl: './weak-students.component.html',
  styleUrls: ['./weak-students.component.css']
})
export class WeakStudentsComponent implements OnInit {

  weakStudents = this.weakStudent.getWeakStudents();

  constructor(private weakStudent: WeakStudentService) { }

  ngOnInit(): void {
  }

}
