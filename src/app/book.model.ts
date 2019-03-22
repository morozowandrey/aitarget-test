export class Book {
  title: string;
  photoUrl?: string;
  description: string;
  author: string;
  isbn: number;
  year: number;
  rating?: number;

  constructor(book) {
    {
      this.title = book.title;
      this.photoUrl = book.photoUrl || '../../assets/images/no-image.svg';
      this.description = book.description;
      this.author = book.author;
      this.isbn = book.isbn;
      this.year = book.year;
      this.rating = book.rating || 0;
    }
  }
}