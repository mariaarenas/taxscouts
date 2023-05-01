export class Book {
  constructor(title, author, cover, isbn, amazonList) {
    this.title = title;
    this.author = author;
    this.cover = cover;
    this.isbn = isbn;
    this.amazonList = amazonList;
  }
}

Object.freeze(Book);
