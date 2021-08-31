import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-alert-character',
  templateUrl: './alert-character.component.html',
  styleUrls: ['./alert-character.component.css']
})
export class AlertCharacterComponent implements OnInit {

  @Input() student: Student | undefined ;
  @Output() details = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
