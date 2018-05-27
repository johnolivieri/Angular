import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBold'
})
export class SearchBoldPipe implements PipeTransform {

  transform(value: string, searchTerm?: string): string {
    if (!searchTerm) {
      return value;
    }

    return value.replace(new RegExp(searchTerm, 'gi'), `<b>$&</b>`);
  }

}
