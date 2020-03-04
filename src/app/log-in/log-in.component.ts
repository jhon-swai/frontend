import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  
  logInForm: FormGroup;

  
  constructor() { }

  ngOnInit() {
    this.logInForm = new FormGroup({
      useremail: new FormControl(''),
      password: new FormControl('')
    }) 
  }

}
