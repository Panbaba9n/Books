import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgxPaginationModule} from 'ngx-pagination';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material';



import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';

import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatDatepickerModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatNativeDateModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
