var fullName='William Smith';
var age=22;
var job='web developer';

console.log('Hello my name is '+fullName+'.I am '+age+' year old.'+'I am '+job+'.');

//append
var val;
val='htin';
val+=' kyaw';
console.log(val);

//escaping
var text='This\'s awesome!';
console.log(text);

//length
val=fullName.length;

//concat
val=fullName.concat(' ',job);

//index of
val=fullName.indexOf('i');
val=fullName.lastIndexOf('h');

//chartAt
val=fullName.charAt('1');

//get last char
val=fullName.charAt(fullName.length-1);

//include
val=fullName.includes('jake');
console.log(val);