import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    if (value.lenght === 0){
      return value;
    }

    /*return value.sort(
      function(a, b){
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      }      
    );*/
    return value.sort((a,b) => {
      if (a[propName] > b[propName]) {
        return 1;
      }
      else {
        return -1;
      }
    })      
  }
}
