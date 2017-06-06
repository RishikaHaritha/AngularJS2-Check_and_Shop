import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'users'
})
export class UsersPipe implements PipeTransform {
	 a : any;
	  em : any;

  transform(emails: any[], input : Object): any {
	 
	  console.log(input + " input in pipe");
	  console.log(emails + " emails in pipe");
	  
    return null;
  }

}
