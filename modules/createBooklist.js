import BookList, { givenAuthor, givenName } from './BookList.js';

export default function createBooklist() {
  const booklist = new BookList(givenName.value, givenAuthor.value);
  givenName.value = '';
  givenAuthor.value = '';
  BookList.addBook(booklist);
}