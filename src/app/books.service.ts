
import { Injectable } from '@angular/core';
import { IBook } from './model/book'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private dataUri = 'http://localhost:3000/book'
  constructor(private http: HttpClient) { }
  getBooks(): Observable<IBook[]> {
    console.log("get books called" );
    return this.http.get<IBook[]>(`${this.dataUri}?limit=5`)
      .pipe(
        catchError(this.handleError)
      )
  }
  saveBook(book:IBook): Observable<IBook> {
    console.log("save books posted" );
    
    
    return this.http.post<any>('http://localhost:3000/book', book).pipe(

      catchError(this.handleError)
    );
  }
  deletePost(book:string): Observable<{}> {
    console.log(book);
    return this.http.delete<any>("http://localhost:3000/book/" + book).pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    console.log(error)
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    
    return throwError(
      'Something bad happened; please try again later.');
  }

}

