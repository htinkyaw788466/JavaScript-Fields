var fruits=['apple','banana','orange'];
var numbers=Array(55,33,88);

console.log(typeof fruits);
console.log(typeof numbers);
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);
console.log(numbers[0]);

//add some index array
fruits[0]='redbarry';
fruits[6]='mango';
console.log(fruits);

//array push
fruits.push('greenbarry');
console.log(fruits);

//array pop
fruits.pop('greenbarry');
console.log(fruits);

//array unshift
fruits.unshift('greenbarry');
console.log(fruits);

//array shift
fruits.shift('greenbarry');
console.log(fruits);

//array spred operators
var nums=[1,2,3,4];
var alphs=['a','b','c','d'];
var results=[...nums,...alphs];
console.log(results);

//array object
var person={
    fullName:'john doe',
    job:'teacher',
    hobbies:['hiking','books_collection','guitar'],
    ranking:33,
    address:{
        street:'DA 33'
    }
}

for(p in person){
    console.log(p+' is '+person[p]);
}

//array object constructor
var user=new Array('bob smith','bob@gmail.com',22);
console.log(user);

//for map array
var addNums=[1,2,3,4,5,6];
var value=addNums.map((n)=>{return n+1});
console.log(value);

//for filter array
var devNums=[1,2,3,4,5,6];
var output=devNums.filter((n)=>{
    //return n%2;
    return !(n%2);
});

console.log(output);

//for reduce array
var totalNums=[1,2,3];
var sum=totalNums.reduce((a,n)=>{
    return a+n;
});

console.log(sum);