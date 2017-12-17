import { Injectable } from '@angular/core';
import { BOOKS } from './mock-books';
import { Book } from './book';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DataService {

  constructor() { }

  myData(): Observable<Book[]> {
    return of(BOOKS);
  }

  myDataDetail(id: number): Observable<Book> {
    return of(BOOKS.find(book => book.id === id));
  }

}
