import { Injectable } from "@angular/core";
import { Book } from "./book.model";

@Injectable()
export class BooksService {

  constructor( ) { }

  getBooks () {
    return new Promise(function (resolve) {
      let books = [
        {
          title: 'Lean Startup',
          photoUrl: '../../assets/images/lean-startup.jpg',
          description: "Most startups fail. But many of those failures are preventable.  The Lean Startup is a new approach being adopted across the globe, changing the way companies are built and new products are launched.",
          author: 'Eric Ries',
          isbn: 9780307887894,
          year: 2011,
          rating: 5
        },
        {
          title: 'Good to Great',
          photoUrl: '../../assets/images/good-to-great.jpg',
          description: "Built to Last, the defining management study of the nineties, showed how great companies triumph over time and how long-term sustained performance can be engineered into the DNA of an enterprise from the verybeginning.",
          author: 'Jim Collins',
          isbn: 9780066620992,
          year: 2001,
          rating: 5
        },
        {
          title: 'Toyota Production System',
          photoUrl: '../../assets/images/toyota.jpg',
          description: "In this classic text, Taiichi Ohno--inventor of the Toyota Production System and Lean manufacturing--shares the genius that sets him apart as one of the most disciplined and creative thinkers of our time. Combining his candid insights with a rigorous analysis of Toyota's attempts at Lean production, Ohno's book explains how Lean principles can improve any production endeavor.",
          author: 'Taiichi Ohno',
          isbn: 1915299143,
          year: 1988,
          rating: 5
        },
        {
          title: 'Blue Ocean Strategy',
          photoUrl: '',
          description: "The global phenomenon that has sold 3.6 million copies, is published in a record-breaking 46 languages and is a bestseller across five continents—now updated and expanded with new content",
          author: 'W. Chan Kim',
          isbn: 9788535284218,
          year: 2014,
          rating: 4
        },
      ];
      
      let typeBooks = books.map(book => {
        return new Book(book);
      });
      
      resolve(typeBooks);
    });
  }
}
