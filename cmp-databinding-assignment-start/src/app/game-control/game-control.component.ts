import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() oddCreated = new EventEmitter<{number: number}>();
  @Output() evenCreated = new EventEmitter<{number: number}>();

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
    if (number % 2 == 0){
      this.evenCreated.emit({number:number});
    }
    else{
      this.oddCreated.emit({number:number});
    }
    
    this.number = this.number+1;
  }

}
