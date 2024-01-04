// const h1='hello';
// console.log(typeof h1);

// const h2=new String('hello');
// console.log(typeof h2);

// console.log(window);
// alert(1);
// console.log(navigator.appVersion);

//object literal
const book1={
    title:'lord of the ring',
    author:'john smith',
    year:2019,
    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

console.log(book1.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));