//create class
class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

}

 //magazine subclasses
class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year);
        this.month=month;
    }
} 

const mag1=new Magazine('lord of the ring','william smith',1999,'december');
console.log(mag1);
console.log(mag1.getSummary());