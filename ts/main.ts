import { Author } from "./modeles/author.js";
import { createBook, toggleAvailability } from "./utils/bookUtils.js";
import { Library } from "./services/library.js";

const author1: Author = {
  name: "John Doe",
  birthYear: 1980,
  genres: ["Fiction", "Drama"],
};
const author2: Author = {
  name: "Jane Smith",
  birthYear: 1990,
  genres: ["Mystery", "Thriller"],
};

const book1 = createBook("To Kill a Mockingbird", author1, 295);
const book2 = createBook("1984", author2, 328);

const library = new Library();

console.log("Initial list of books");
library.addBook(book1);
library.addBook(book2);

console.log(library.listAvailableBooks());

console.log("toggleAvailability");
toggleAvailability(book1);
console.log(library.listAvailableBooks());

console.log("find book by title");
const findbook = library.findBookByTitle("To Kill a Mockingbird");

if (findbook) {
  console.log(`Find book: ${findbook.title} by ${findbook.author.name}`);
} else {
  console.log("Book not found");
}

console.log("get books by author");
const findByAuthor = library.getBooksByAuthor("Jane Smith");

if (findByAuthor.length > 0) {
  findByAuthor.forEach((book) => {
    console.log(` ${book.title} by ${book.author.name}`);
  });
} else {
  console.log("No books found by this author");
}

console.log("toggleAvailability");
toggleAvailability(book1);
console.log(library.listAvailableBooks());

console.log("remove book");
library.removeBook("1984");

console.log(library.listAvailableBooks());
