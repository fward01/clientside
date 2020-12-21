import { Component, OnInit } from '@angular/core';
import { IBook } from '../../model/book';
import { BookService  }  from '../../books.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.css']
})
export class BookslistComponent implements OnInit {
  bookList: IBook[];
  message: string;
  currentBook : IBook;
  constructor(private bookService: BookService) { }
  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (value: IBook[] )=> this.bookList = value,
      complete: () => console.log('book service finished'),
      error: (mess) => this.message = mess
    })
  }
  clicked (book: IBook): void {
    this.currentBook = book;
  }
}

