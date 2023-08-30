class Book {
    constructor(title, author, year, month) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.month = month;
    }

getSummary() {
        return `${this.title} was writen by 
    ${this.author} in ${this.year} on ${this.month}`;
    }
}

//Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
    super(title, author, year);
    this.month =month;
    }
}

///Initantiate Magazine
const mag1 = new Magazine('Mag One', 'John doe', 
'2018', 'Jan');

console.log(mag1.getSummary());
