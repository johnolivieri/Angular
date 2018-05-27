import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: Book[], searchTerm?: string): any {
    console.log('FilterPipe.transform');
    return array.filter((item) => {
      return searchTerm && searchTerm.length > 0 ? this.itemMatches(searchTerm, item) : true;
    });
  }

  itemMatches(searchTerm: string, value: Book): boolean {
    const itemValue = value.title;

    if (!itemValue) {
      return false;
    }

    return itemValue.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1;
  }
}
