import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/model/book';

@Component({
  selector: 'app-book-row',
  templateUrl: './booksrow.component.html',
  styleUrls: ['./booksrow.component.css']
})
export class BooksrowComponent implements OnInit {

  @Input() book: IBook;

  constructor() { }

  ngOnInit(): void {
  }

}
