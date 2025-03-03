// Task 1 - Book class to store book details and update copies
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }

    updateCopies(quantity) {
        this.copies += quantity;
    }
}

// Test case for Task 1
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected: Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected: Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4

// Task 2 - Borrower class to manage borrower details and borrowed books
class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }

    borrowBook(bookTitle) {
        this.borrowedBooks.push(bookTitle);
    }

    returnBook(bookTitle) {
        this.borrowedBooks = this.borrowedBooks.filter(title => title !== bookTitle);
    }
}

// Test case for Task 2
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected: []

// Task 3 - Library class to manage books and borrowers
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        this.books.forEach(book => {
            console.log(book.getDetails());
        });
    }
}

// Test case for Task 3
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4

// Task 4 - Lending system that reduces book copies and updates borrower's records
Library.prototype.lendBook = function(borrowerId, isbn) {
    const book = this.books.find(b => b.isbn === isbn);
    const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);

    if (!book || !borrower) {
        console.log("Book or Borrower not found.");
        return;
    }

    if (book.copies > 0) {
        book.updateCopies(-1);
        borrower.borrowBook(book.title);
    } else {
        console.log("Book is not available.");
    }
};

// Additional setup for test case 4
library.borrowers.push(borrower1); // Add borrower to library before lending

// Test case for Task 4
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected: Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3

console.log(borrower1.borrowedBooks);
// Expected: ["The Great Gatsby"]

// Task 5 - Returning system that increases book copies and updates borrower's records
Library.prototype.returnBook = function(borrowerId, isbn) {
    const book = this.books.find(b => b.isbn === isbn);
    const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);

    if (!book || !borrower) {
        console.log("Book or Borrower not found.");
        return;
    }

    if (borrower.borrowedBooks.includes(book.title)) {
        book.updateCopies(1);
        borrower.returnBook(book.title);
    } else {
        console.log("This borrower did not borrow this book.");
    }
};

// Test case for Task 5
library.returnBook(201, 123456);
console.log(book1.getDetails());
// Expected: Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4

console.log(borrower1.borrowedBooks);
// Expected: []
