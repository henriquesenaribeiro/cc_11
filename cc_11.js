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
