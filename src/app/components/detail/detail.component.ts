import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  angForm: FormGroup;
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  user = 'Werner';
  
  d_name : string;
  d_surname : string;
  d_idnumber : string;
  d_gender : string;
  d_mail : string;
  d_contact : string;

  name : string;
  surname : string;
  contact : string;
  medi_aid : string;
  medi_number : string;
  medi_condition : string;

  ngOnInit() {
    this.angForm = this.formBuilder.group({
      d_name: ['', Validators.required],
      d_surname: ['', Validators.required],
      d_idnumber: ['', Validators.required],
      d_gender: ['', Validators.required],
      d_mail: ['', Validators.required],
      d_contact: ['', Validators.required]
    });

    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      contact: ['', Validators.required],
      medi_aid: ['', Validators.required],
      medi_number: ['', Validators.required],
      medi_condition: ['', Validators.required]
    });
  }
  
  add_participant() {
    console.log("User " + this.name);
  }
}

