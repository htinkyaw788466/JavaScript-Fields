//constructor
function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;

    this.getSummary=function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    //console.log('book init');
}

//init book object
const book1=new Book('lord of the ring','john doe',1999);
const book2=new Book('love story','ali smith',1998);

console.log(book1.title);
console.log(book1.getSummary());