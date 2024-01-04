var yearJohn,yearMark,year;
var now=2023;
var ageJohn=24;
var ageMark=23;

//math
var yearJohn=now-24;
var yearMark=now-23;
console.log(yearJohn);
console.log(yearMark);

//logical operators
var johnOlder=ageJohn>ageMark;
console.log(johnOlder);

//types of operators
console.log(typeof johnOlder);

//operators precedence
var year=2023;
var chuckyBirthYear=1999;
var fullAge=26;

var isFullAge=year-chuckyBirthYear>=fullAge;
console.log(isFullAge);

//multiple assignment operators
var x,y;

x=y=(55+5)-1;

x+=2;

x-=2;

x*=2;

x/=2;

x%=2;

x++;

++x;

x--;

--x;

console.log(x);

var num1=50;
var num2=50;
var val;

//sample math with numbers
val=num1+num2;
val=num1-num2;
val=num1*num2;
val=num1/num2;
val=num1%num2;

//math object
val=Math.PI;
val=Math.E;
val=Math.round(2.4);
val=Math.floor(2.8);
val=Math.sqrt(64);
val=Math.abs(-3);
val=Math.pow(8, 2);
val=Math.min(44,444,3333,222);
val=Math.max(44,444,3333,222);
val=Math.random();
val=Math.floor(Math.random()*20+1);
console.log(val);