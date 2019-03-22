import { Component, OnInit } from '@angular/core';
import {
  FormGroup, FormBuilder, FormArray, Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  newBooksForm: FormGroup;
  bookForm: FormGroup;
  book: any;
  currentRoute: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.currentRoute = this.route.snapshot.paramMap.get('id');
    this.createForm();
    this.createBook();
  }

  createForm() {
    this.newBooksForm = this.formBuilder.group({
      books: this.formBuilder.array([]),
    });
  }

  createBook() {
    this.book = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', [Validators.maxLength(500), Validators.required]],
      author: ['', Validators.required],
      isbn: ['', [Validators.pattern("^[0-9]*$"), Validators.required]],
      year: ['', [Validators.pattern("^[0-9]*$"), Validators.required]],
      rating: ['', [Validators.pattern("^[0-9]*$"), Validators.max(5)]]
    });

    this.formBooks.push(this.book);
  }

  get formBooks() {
    return this.newBooksForm.get('books') as FormArray;
  }

  addBook() {
    this.createBook()
    console.log(this.formBooks.value);
  }
}
