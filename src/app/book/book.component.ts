import { Component, OnInit } from '@angular/core';
import {
  FormGroup, FormBuilder, Validators
} from '@angular/forms';
import { BooksService } from '../books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  bookForm: FormGroup;
  book: any;
  currentRoute: any;

  constructor(
    private booksService: BooksService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.currentRoute = this.route.snapshot.paramMap.get('id');
    this.createForm();
    this.getBooks();
  }

  createForm() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', [Validators.maxLength(500), Validators.required]],
      author: ['', Validators.required],
      isbn: ['', [Validators.pattern("^[0-9]*$"), Validators.required]],
      year: ['', [Validators.pattern("^[0-9]*$"), Validators.required]],
      rating: ['', [Validators.pattern("^[0-9]*$"), Validators.max(5)]]
    });
    this.bookForm.disable();
  }

  getBooks() {
    this.booksService.getBooks().then(books => {
      JSON.parse(JSON.stringify(books)).forEach(book => {
        if (book.title === this.currentRoute) {
          this.book = book;
        }
      });

      this.bookForm.controls.title.setValue(this.book.title);
      this.bookForm.controls.description.setValue(this.book.description);
      this.bookForm.controls.author.setValue(this.book.author);
      this.bookForm.controls.isbn.setValue(this.book.isbn);
      this.bookForm.controls.year.setValue(this.book.year);
      this.bookForm.controls.rating.setValue(this.book.rating);
    });
  }

  editBook() {
    this.bookForm.enable();
  }

  saveBook() {
    this.bookForm.disable();
  }
}
