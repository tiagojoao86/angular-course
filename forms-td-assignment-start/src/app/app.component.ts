import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  submitted: boolean = false;
  options = [
    {id: 0, name:"Basic"},
    {id: 1, name:"Advanced"},
    {id: 2, name:"Pro"}
  ];

  user = {
    email: '',
    password: '',
    type: ''
  }
  
  defaultQuestion = this.options[1].name;
  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.user.type = this.signupForm.value.type;
    this.signupForm.reset();
  }
}
