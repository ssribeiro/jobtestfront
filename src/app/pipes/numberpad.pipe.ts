import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberpad'
})
export class NumberpadPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args) return this.pad(value, 2, 0);
    else return this.pad(value, args.width || 2, args.char || 0);
  }

  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

}
