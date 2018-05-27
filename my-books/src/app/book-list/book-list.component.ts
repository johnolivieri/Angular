import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Input() books: Book[];
  searchTerm: string;

  constructor() {
    this.searchTerm = '';
  }

  bookLocation(isFirst: boolean, isLast: boolean): string {
    if (isFirst) {
      return '- first book';
    }

    if (isLast) {
      return '- last book';
    }

    return '';
  }

  removeBook(index: number) {
    this.books.splice(index, 1);
  }
}
