import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //numbers = [{type:string, number:number}];
  numbers = [];

  onOddAdded(number:{number: number}){
    console.log('Odd: '+ number.number);
    this.numbers.push({type: 'Odd', number: number.number});
  }

  onEvenAdded(number:{number: number}){
    console.log('Even: '+ number.number);
    this.numbers.push({type: 'Even', number: number.number});
  }

}
