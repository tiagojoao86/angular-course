import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform{

    transform(value: any): any {
        if (value === ''){
            return value;
        }
        /*var reverseString = '';
        var i = (<string>value).length;
        for (i ; i > 0; i--){
            reverseString += (<string>value).charAt(i-1);
        }
        return reverseString;*/
        return value.split('').reverse().join('');
    }
}