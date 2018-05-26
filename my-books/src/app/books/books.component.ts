import { Component, OnInit } from '@angular/core';
import { computed } from 'mobx-angular';

import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];

  private _bookTitle: string;

  get bookTitle(): string {
    return this._bookTitle;
  }

  set bookTitle(bookTitle: string) {
    console.log(`Book title changed, Old Value : ${this._bookTitle}, New value: ${bookTitle}`);
    this._bookTitle = bookTitle;
  }

  constructor(private bookService: BookService) {
    this.books = [];
    this.bookTitle = '';
  }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe(savedBooks => this.books = savedBooks);
  }

  addBook(): void {
    this.books.push({title: this.bookTitle});
    this.bookTitle = '';

    console.log('Book List:');
    this.books.forEach(book => {
      console.log(`${book.title}`);
    });
  }

  @computed get canAdd(): boolean {
    return this.bookTitle.length === 0;
  }
}
