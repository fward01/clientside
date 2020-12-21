import { Component, Input, OnInit } from '@angular/core';
import {IBook} from '../../model/book';
import { BookService  }  from '../../books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {

    public genre:string;
    public author:string;
    public title:string;
    public publisher:string;


  
    constructor(private bookService: BookService) { }

  ngOnInit(): void {
      
  }
  clicked (): void {
    console.log("Save me bob");
    let book:IBook={title:this.title,
        author:this.title,
        publisher:this.title,
        genre:this.title,
        id: null}
    this.bookService.saveBook(book).subscribe(returnedBook=>console.log(returnedBook));
         }
  }

