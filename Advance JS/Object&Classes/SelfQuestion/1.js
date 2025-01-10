// 1. combining Optional Chaining, Object Methods, and Property Descriptors

class Library{
    constructor(name){
        this.name = name;
        this.books =[];

    }

    addBook(book){
        this.books.push(book);
    }


    findBookByTitle(title){
        return this.books.find(book => book?.title === title);
    }
}

let library = new  Library("City Library");

Object.defineProperty(library, 'name', {
    writable:false
});

library.addBook({title: "Gullivers Travels", author: "Jonathan Swift"});
library.addBook({title: "Half Girlfriend", author: "Chetan Bhagat"});

let book = library.findBookByTitle("Half Girlfriend");
console.log(book);

library.name = "New Library";
console.log(library.name);

