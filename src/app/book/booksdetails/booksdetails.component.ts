import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/books.service';
import {IBook} from '../../model/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './booksdetails.component.html',
  styleUrls: ['./booksdetails.component.css']
})
export class BooksdetailsComponent implements OnInit {

  @Input() book : IBook;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  clicked (): void {
    console.log("End me bob");
    console.log(this.book.id);
    this.bookService.deletePost(this.book.id).subscribe(returnedBook=>console.log(returnedBook))
         }

}