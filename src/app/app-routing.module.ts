import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full' },
  {path: 'detail/:id', component: BookDetailComponent },
  {path: 'books', component: BooksComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }