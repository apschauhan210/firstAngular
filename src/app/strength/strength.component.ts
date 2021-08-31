import { Component, OnInit } from '@angular/core';
import { StrengthService } from '../strength.service';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css']
})
export class StrengthComponent implements OnInit {

  constructor(private strength: StrengthService) { }

  sectionStrength = this.strength.getStrength();

  ngOnInit(): void {
  }

}
