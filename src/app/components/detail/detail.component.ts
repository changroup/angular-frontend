import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }

  user = 'Werner';
  
  name : string;
  surname : string;
  contact : string;
  medi_aid : string;
  medi_number : string;
  medi_condition : string;

  ngOnInit() {
  }

  add_participant() {
    console.log("User " + this.name);
  }
}
