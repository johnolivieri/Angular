import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, args?: any): string {
   if (value && value.indexOf('<b>') !== -1) {
      const result = value.replace('<b>', '<b class="highlight-text">');
      return result;
    }

    return value;
  }

}
