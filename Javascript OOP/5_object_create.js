//object of protos
const bookProtos={
    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge:function(){
        const years=new Date().getFullYear()-this.year;
        return `${this.title} is ${years} years old`;
    }
}

//create object
// const book1=Object.create(bookProtos);
// book1.title='lord of the ring';
// book1.author='john doe';
// book1.year=2018;

const book1=Object.create(bookProtos,{
    title:{value:'lord of the ring'},
    author:{value:'john doe'},
    year:{value:2017}
});
console.log(book1);