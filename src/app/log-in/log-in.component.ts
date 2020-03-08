import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  
  // logInForm: FormGroup;
  loginFormBuilder = this.formBuilder.group({
    useremail: ['',Validators.required, Validators.email],
    // username: [''],
    password:['']
  })

  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.logInForm = new FormGroup({
    //   useremail: new FormControl(''),
    //   password: new FormControl('')
    // })   
  }
  onSubmit (){
    console.warn(this.loginFormBuilder.value);
  }

}
