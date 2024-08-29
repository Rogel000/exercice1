export function createBook(title, author, pages) {
    return { title, author, pages, isAvailable: true };
}
export function toggleAvailability(book) {
    book.isAvailable = !book.isAvailable;
}
