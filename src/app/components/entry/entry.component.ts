import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor() { }
  
  event = 'mountain bike event';
  date = '6 February 2018';
  names = ['John', 'Messi', 'Suarez', 'Ronaldo', 'Ozil'];
  distances = ['120km', '45km', '60km'];

  ngOnInit() {
  }

  name : string;
  distance : string;
  fee : string;
  add_participant() {
    console.log(this.name);
  }

  moreText = 'Participants in this event and all functions and events related.';
  showMore(event) {
    // #('.rule-content').fontsize = '25';
  }

  continuePay() {
    console.log("Continue");
  }
}
