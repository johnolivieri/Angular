import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookStatus'
})
export class BookStatusPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    switch (value) {
      case 'bad':
        return 'fa-frown-o';
      case 'good':
        return 'fa-smile-o';
      case 'ok':
        return 'fa-meh-o';
    }
  }

}
