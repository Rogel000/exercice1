import { Book } from "../modeles/book.js";
import { Author } from "../modeles/author.js";

export function createBook(title: string, author: Author, pages: number): Book {
  return { title, author, pages, isAvailable: true };
}

export function toggleAvailability(book: Book): void {
  book.isAvailable = !book.isAvailable;
}
