import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookformComponent } from './book/bookform/bookform.component';
import { BooksdetailsComponent } from './book/booksdetails/booksdetails.component';
import { BookslistComponent } from './book/bookslist/bookslist.component';
import { BooksrowComponent } from './book/booksrow/booksrow.component';

const routes: Routes = [
    { path: '', redirectTo: 'details', pathMatch: 'full' },    
    { path: 'row', component: BooksrowComponent },    
    { path: 'details', component: BooksdetailsComponent },    
    { path: 'list', component: BookslistComponent },  
    { path: 'form', component: BookformComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }