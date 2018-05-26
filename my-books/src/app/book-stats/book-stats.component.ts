import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'app-book-stats',
  templateUrl: './book-stats.component.html',
  styleUrls: ['./book-stats.component.css']
})
export class BookStatsComponent implements OnChanges {
  @Input() books: Book[];
  originalNumberOfBooks: number;  // Use this as a one-time bind member

  get addedBooks(): number {
    return this.books.length - this.originalNumberOfBooks;
  }

  constructor() {}

  // This is a hack because Angular does not have a one-time bind
  ngOnChanges(changes: SimpleChanges) {
    if (!this.originalNumberOfBooks) {
      this.originalNumberOfBooks = this.books.length;
    }
  }
}
