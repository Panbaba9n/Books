import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private dataService: DataService) { }

  title = 'My Books';
  books: Array<Book> = [];
  p = 1;
  isDesc = false;
  column = 'CategoryName';

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.dataService.myData()
      .subscribe(books => this.books = books);
  }

  sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    const direction = this.isDesc ? 1 : -1;

    this.books.sort(function(a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      } else if (a[property] > b[property]) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }

}
