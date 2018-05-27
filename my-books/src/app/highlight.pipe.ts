import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    console.log(value);
    if (value && value.indexOf('<b>') !== -1) {
      const result = `<span style='background-color: #eceeef; padding:10px'>${value}</span>`;
      return result;
    }

    return value;
  }

}
