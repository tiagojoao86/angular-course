import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  visibleDetail = false;
  logActions = [];
  actionNumber = 0;

  displayDetails(){
    this.visibleDetail = !this.visibleDetail;
   /* this.actionNumber ++;
    this.logActions.push(this.actionNumber);  */
    this.logActions.push(new Date());  
  }

  getColor(logAction:number){
    return logAction >= 5 ? 'blue' : 'white';
  }

}
