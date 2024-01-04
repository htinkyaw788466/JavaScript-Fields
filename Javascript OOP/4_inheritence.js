//constructor
function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
}

//getsummary
Book.prototype.getSummary=function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

//Magazine constructor
function Magazine(title,author,year,month){
    Book.call(this,title,author,year);
    this.month=month;
}

//inherit prototype
Magazine.prototype=Object.create(Book.prototype);

//instantiate magazine object
const mag1=new Magazine('lord of the ring','john doe',1997,'december');
// console.log(mag1);
// console.log(mag1.getSummary());

//use magazine constructor
Magazine.prototype.constructor=Magazine;
console.log(mag1);