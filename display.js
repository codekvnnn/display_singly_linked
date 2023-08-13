class BookNode {
    constructor(title) {
        this.title = title;
        this.next = null;
    }
}

class PersonalLibrary {
    constructor() {
        this.head = null;
    }

    addBook(title) {
        const newBook = new BookNode(title);
        if (this.head === null) {
            this.head = newBook;
            return this.head;
        } else {
            newBook.next = this.head;
            this.head = newBook;
            return this.head;
        }
    }

    displayBooks() {
        if (this.head === null) return "No books in the library.";

        let currentBook = this.head;
        let titles = '';
        
        while (currentBook) {
            titles += currentBook.title;
            if (currentBook.next) titles += ', ';
            currentBook = currentBook.next;
        }
        
        return titles;
    }
}

// Testing

const myLibrary = new PersonalLibrary();
console.log(myLibrary.addBook("To Kill a Mockingbird"));    // BookNode { title: 'To Kill a Mockingbird', next: null }
console.log(myLibrary.addBook("1984"));                     // BookNode { title: '1984', next: BookNode { title: 'To Kill a Mockingbird', next: null } }
console.log(myLibrary.displayBooks());                      // "1984, To Kill a Mockingbird"
console.log(myLibrary.addBook("The Great Gatsby"));         // BookNode { title: 'The Great Gatsby', next: BookNode { title: '1984', next: BookNode { title: 'To Kill a Mockingbird', next: null } } }
console.log(myLibrary.displayBooks());                      // "The Great Gatsby, 1984, To Kill a Mockingbird"
