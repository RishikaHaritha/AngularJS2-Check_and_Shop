import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'users'
})
export class UsersPipe implements PipeTransform {
 transform(value: any): any{
        if(value!== undefined && value!== null){
            return _.uniqBy(value, 'cart');
        }
        return value;
    }

}
