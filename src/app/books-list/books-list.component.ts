import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: any;

  constructor(
    private booksService: BooksService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.booksService.getBooks().then(books => {
      this.books = books;
      console.log(books);
      
    });
  }

  bookAction (bookTitle) {
    this.router.navigate(['/books', bookTitle]);
  }

}
