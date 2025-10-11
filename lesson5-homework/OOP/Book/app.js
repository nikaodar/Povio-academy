class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  printDetails() {
    console.log(
      "Title: " +
        this.title +
        ", author: " +
        this.author +
        ", year: " +
        this.year
    );
  }
}

const book1 = new Book(
  "harry potter and the deathly hallows",
  "J. K. Rowling",
  2007
);
const book2 = new Book("the great gatsby", "F. Scott Fitzgerald", 1925);
const book3 = new Book(
  "the lord of the rings",
  "John Ronald Reuel Tolkien",
  1954
);

book1.printDetails();
book2.printDetails();
book3.printDetails();
