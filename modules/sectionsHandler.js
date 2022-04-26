import { list, add, contact} from "./htmlElements.js";
export default function sectionsHandler(element) {
  element.preventDefault();
  const link = element.target;
  if (link.classList.contains('list')) {
    add.classList.remove('active');
    contact.classList.remove('active');
    list.classList.add('active');
  } else if (link.classList.contains('add')) {
    list.classList.remove('active');
    contact.classList.remove('active');
    add.classList.add('active');
  } else if (link.classList.contains('contact')) {
    list.classList.remove('active');
    add.classList.remove('active');
    contact.classList.add('active');
  }
}