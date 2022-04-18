// Problem
// Design a library management system using object oriented programming (LLD).

// assumptions  // 

// requirements
    // Must have features
        // Add/remove book from library
        // check if book is available
        // location of book in the department and self
        
    // other features
        // history of books taken by user
        // get book by authors
        // get book by year of publication

// entities
    // book
    // shelf
    // department
    // library

// interaction between entities
    // each shelf will have multiple books
    // each department will have multiple shelf
    // library will have multiple departments
    // libray 
    
class Book {
    #title: String;
    #author: String;
    #release_year: Number;

    constructor( title: String, author: String, release_year: Number ){
        this.#title = title;
        this.#author = author;
        this.#release_year = release_year;
    }
    get title(){
        return this.#title;
    }
    get year(){
        return this.#release_year;
    }
    get author(){
        return this.#author;
    }
}

class Shelf {
    #number: Number;
    #books: Book[];

    constructor( number: Number ){
        this.#number = number;
        this.#books = [];
    }
    get id(){
        return this.#number;
    }
    get books(){
        return this.#books;
    }
    removeBook(bookName: String) {
        this.#books = this.#books.filter( item => item.title !== bookName );
    }
    addBook(book: Book) {
        let res = this.#books.filter( item => book !== item );
        if ( res.length ) return false;
        this.#books.push(book);
    }
}

class Department {
    #name: String;
    #shelfs: Shelf[];
    constructor( name: String ){
        this.#name = name;
        this.#shelfs = [];
    }
    get name(){
        return this.#name;
    }
    get shelfs(){
        return this.#shelfs;
    }
    addShelf( shelf: Shelf ){
        this.#shelfs.push(shelf);
    }
}

// master/main class
class Library {
    #departments: Department[];
    #name: String;
    constructor( name: String ){
        this.#name = name;
        this.#departments = [];
    }
    get name(){
        return this.#name;
    }

    addDepartment(name: String){
        const department = new Department(name);
        this.#departments.push(department);
    }

    addShelf(departmentName: String, shelfId: Number ){
        const depart = this.#departments.find(depa => depa.name === departmentName);
        const shelf = new Shelf(shelfId);
        if ( !depart ) return false;
        depart.addShelf(shelf);
    }

    addBook( department: String, shelfId: Number, bookTitle: String, bookAuthor: String, bookPublishYear: Number  ){
        const book = new Book( bookTitle, bookAuthor, bookPublishYear );
        const depart = this.#departments.find( dep => dep.name === department );
        if ( !depart ) return false;
        
        const shelf = depart.shelfs.find( val => val.id === shelfId);
        if ( !shelf ) return false;

        shelf.addBook( book );
        return true;
    }

    removeBook( bookName: String ){
        for ( const dep of this.#departments ){
            for ( const shelf of dep.shelfs ){
                shelf.removeBook(bookName);
            }
        }
    }

    findBook( bookName: String ){
        for ( const dep of this.#departments ){
            for ( const shelf of dep.shelfs ){
                const book = shelf.books.find(b => b.title === bookName)
                if( book ) return {
                    location: `${dep.name} - ${shelf.id}`,
                    book: book.title
                } 
            }
        }
        return false;
    }

    listBooks(){
        for ( const dep of this.#departments ){
            for ( const shelf of dep.shelfs ){
                for ( const book of shelf.books ) {
                    console.log(book.title);
                }
            }
        }
    }
}


const myLibrary = new Library("Amazing Library");
myLibrary.addDepartment("Science and Technology");
myLibrary.addShelf("Science and Technology", 1);

myLibrary.addDepartment("Self Help");
myLibrary.addShelf("Self Help", 2);

myLibrary.addBook("Self Help", 2, "Atomic Habits", "James Clear", 2012);

myLibrary.addBook("Science and Technology", 1, "Divergent", "Suzene Collins", 2008);
console.log(myLibrary.findBook("Atomic Habits")); // location { location: 'Self Help - 2', book: 'Atomic Habits' }

myLibrary.removeBook("Divergent");
console.log(myLibrary.findBook("Divergent")); // false

myLibrary.listBooks(); // All books present