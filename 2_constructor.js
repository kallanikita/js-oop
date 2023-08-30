// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} was writen by 
${this.author} in ${this.year}`;
    };
}

//Instatiate an Object
//onst book1 = new Book();
const book1 = new Book('Book One','John Doe', '2013');
const book2 = new Book('Book Two','Tin Charles', '2016');

//console.log(book1);
console.log(book2);
//console.log(book2.getSummary());