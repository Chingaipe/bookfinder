import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultValue'
})
export class DefaultValuePipe implements PipeTransform {

  picture = './assets/no-cover.jpg';

  transform(value: any, args?: string): any {
    return value != undefined ? value : args;
  }

}