import BookList, { givenAuthor, givenName } from './BookList.js';

const createBooklist = () => {
  const booklist = new BookList(givenName.value, givenAuthor.value);
  givenName.value = '';
  givenAuthor.value = '';
  BookList.addBook(booklist);
};

export default createBooklist;