import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval;
  number = 0;

  constructor() { }

  ngOnInit() {
  }

  startGame(){
    this.interval = setInterval(()=>this.startInterval(this.number),1000); 
  }

  stopGame(){
    clearInterval(this.interval);
  }

  startInterval(number:number){    
    console.log(number);
    this.number = this.number+1;
  }

}
