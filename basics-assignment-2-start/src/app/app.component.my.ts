import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username : string = "";

  allowAddUser = false;

  validationUserName(){
    if (this.username.length > 0) {
      this.allowAddUser = true;
    }
    else{
      this.allowAddUser = false;
    }    
  }
  clearUserName(){
    this.username = "";
    this.allowAddUser = false;
  }
}

