import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorPageComponent } from '../error-page/error-page.component';
import { BooksListComponent } from '../books-list/books-list.component';
import { BookComponent } from '../book/book.component';
import { NewBookComponent } from '../new-book/new-book.component';
import { CommonModule } from '@angular/common';
import { BooksService } from '../books.service';
import { MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

import { StarRatingModule, StarRatingConfigService } from 'angular-star-rating';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/books",
    pathMatch: "full"
  },
  {
    path: "books",
    component: BooksListComponent
  },
  {
    path: "books/:id",
    component: BookComponent
  },
  {
    path: "new-book",
    component: NewBookComponent
  },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  declarations: [
    ErrorPageComponent,
    BooksListComponent,
    BookComponent,
    NewBookComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    StarRatingModule,

    ReactiveFormsModule,

    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [
    BooksService,
    StarRatingConfigService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
