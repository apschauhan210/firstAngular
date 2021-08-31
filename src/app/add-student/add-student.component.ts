import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { students } from '../studentList';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  

  addStudentForm = this.formBuilder.group({
    id: '',
    name: '',
    character: '',
    grade: ''
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(data: { id: number; name: string; character: string; grade: string; }) {
    students.push({id: data.id, studentName: data.name, character: data.character, grade: data.grade});
    console.warn('New student has been added to student list', this.addStudentForm.value);
    window.alert("Student " + data.name + " is added Successfully");
    this.addStudentForm.reset();
  }

}
