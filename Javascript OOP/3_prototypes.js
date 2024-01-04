//constructor
function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
}

//get book summary
Book.prototype.getSummary=function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

//get age
Book.prototype.getAge=function(){
    const years=new Date().getFullYear()-this.year;
    return `${this.title} is ${years} year old.`;
}

//revise/change year
Book.prototype.revise=function(newYear){
    this.year=newYear;
    this.revised=true;
}

//init object
const book1=new Book('lord of the ring','john doe',2022);
// console.log(book1.getSummary());
// console.log(book1.getAge());

book1.revise(2021);
console.log(book1);