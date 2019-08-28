
class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }

    read() {
        console.log('reading ' + this.name)
    }

}


var myBook = new Book('Anna Karenina', ' Leo Tolstoy', '1877');
console.log(myBook);
console.log(myBook.ISBN); // Unassigned properties of an object are undefined (and not null).
myBook.read()

// const works on objects 
const FLIGHT_TICKET = { 'destination': 'Helsinki' };

// Attempting to overwrite the object throws an error - Uncaught TypeError: Assignment to constant variable.
FLIGHT_TICKET = { 'departure': 'Helsinki' };

// However, object keys are not protected

FLIGHT_TICKET.destination = 'Paris';