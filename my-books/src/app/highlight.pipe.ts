import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, args?: any): string {
   if (value && value.indexOf('<b>') !== -1) {
      const result = value.replace(value, `<span class="highlight-text">${value}</span>`);
      return result;
    }

    return value;
  }

}
