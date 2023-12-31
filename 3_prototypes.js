// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
    Book.prototype.getSummary = function() {
    return `${this.title} was writen by 
${this.author} in ${this.year}`;
    };

// Get Age
Book.prototype.getAge = function()  {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

// revise / change year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
};

//Instatiate an Object
const book1 = new Book('Book One','John Doe', '2013');
const book2 = new Book('Book Two','Tin Charles', '2016');

console.log(book2.getAge());
book2.revise('2019');
console.log(book2);

console.log(book2.getAge());



