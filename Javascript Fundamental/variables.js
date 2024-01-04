console.log('hello world');
console.log(123);
console.log(true);
console.log([1,2,3]);
console.log({a:44},{b:44});
console.table({a:44},{b:66});
console.table({name:'bob'},{age:55});
console.error('this is some error');
console.clear();
console.log('This is warning');

var authorName='john doe';
//var authorName='bob';
var age=32;

console.log('Hello My name is '+authorName+'.I am '+age+' year old.');

//data types
var firstName='chucky'; //string
var isMarried=true; //boolean
var pricer=3433; //integer
var quantity=44; //float
var job; //undefinded

console.log(job);

//null
var car=null;
console.log(typeof car);

//symbols
var sym=Symbol();
console.log(typeof sym);

//date and time
var date=new Date();
console.log(typeof date);
console.log(date);

//number to string
var val;
val=String(5);
val=String(5+4);

//boolean to string
val=String(true);

//date to string
val=String(new Date());

//array to string
val=String(['bob',44,'hiking']);

//to string
val=(5).toString();
val=true.toString();

//string to number
val=Number('5');
val=Number(true);
val=Number(false);
val=Number(null);
val=String('hello world');
val=String(['bob',45]);

val=parseInt('44.4');
val=parseFloat('444.44');
//console.log(val);
console.log(val.toFixed(2));

var num1=String(4);
var num2=3;

//var total=num1+num2;
var total=Number(num1)+num2;
console.log(total);