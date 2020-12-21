import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppRoutingModule } from './approuting.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookslistComponent } from './book/bookslist/bookslist.component';
import { BooksrowComponent } from './book/booksrow/booksrow.component';
import { BooksdetailsComponent } from './book/booksdetails/booksdetails.component';
import { BookformComponent } from './book/bookform/bookform.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BookslistComponent,
    BooksrowComponent,
    BooksdetailsComponent,
    BookformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
