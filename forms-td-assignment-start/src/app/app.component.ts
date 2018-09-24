import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  options = [
    {id: 0, name:"Basic"},
    {id: 1, name:"Advanced"},
    {id: 2, name:"Pro"}
  ];
  
  defaultQuestion = this.options[1].name;

  ngOnInit(){
    
  }
//"Basic", "Advanced", "Pro"
}
