import Storage from './storage.js';

const removeBook = (element) => {
  if (element.target.classList.contains('btn2')) {
    const PARENT = element.target.parentNode;
    const TITLE = PARENT.children[0].children[0].textContent;
    const AUTHOR = PARENT.children[0].children[1].textContent;
    PARENT.remove();
    Storage.removeBook(TITLE, AUTHOR);
  }
};

export default removeBook;