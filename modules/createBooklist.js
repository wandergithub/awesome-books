export default function createBooklist() {
    const booklist = new BookList(givenName.value, givenAuthor.value);
    givenName.value = "";
    givenAuthor.value = "";
    BookList.addBook(booklist);
    return booklist;
}