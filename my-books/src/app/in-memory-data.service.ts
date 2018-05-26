import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books: Book[] = [
      {
        'id' : 1,
        'title' : 'War and Peace',
        'description' : 'Really enjoyed this one.',
        'rating' : 3,
        'status': 'good'
      },
      {
          'id' : 2,
          'title' : 'Oliver',
          'description' : '',
          'rating' : 2,
          'status' : 'ok'
      },
      {
          'id' : 3,
          'title' : 'Charlie and the Chocolate Factory',
          'description' : '',
          'rating' : 5,
          'status' : 'bad'
      }
    ];

    return {books};
  }
}
