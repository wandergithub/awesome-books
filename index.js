import BookList, {
  listOfName,
} from './modules/BookList.js';
import createBooklist from './modules/createBooklist.js';
import { btnClass, links } from './modules/htmlElements.js';
import sectionsHandler from './modules/sectionsHandler.js';
import removeBook from './modules/removeBook.js';
import displayDate from './modules/displayDate.js';

displayDate();
btnClass.addEventListener('click', () => {
  createBooklist();
});
window.addEventListener('load', BookList.display());
links.addEventListener('click', (element) => {
  sectionsHandler(element);
});
listOfName.addEventListener('click', (element) => {
  removeBook(element);
});
