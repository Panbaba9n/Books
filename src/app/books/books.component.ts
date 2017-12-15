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
  books: Book[] = [];
  selectedBook: Book;
  p = 1;

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.books = this.dataService.myData();
  }

}
