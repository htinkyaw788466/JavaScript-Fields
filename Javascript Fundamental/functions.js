//sample function
var name;
function sayHello(name){
    console.log('hello '+name);
}

sayHello('bob smith');
sayHello('john doe');

function calculateAge(birthYear){
    return 2023-birthYear;
}

var age=calculateAge(1999);
console.log(age);

var WhatDoYouDo=function(firstName,job){
    switch (job) {
        case 'developer':
            return firstName+' is a developer';
            break;
        case 'teacher':
            return firstName+' teach coding for kids';
            break;
        default:
            return firstName+' is something';
            break;
    }
}

// var Out=WhatDoYouDo('john doe','developer');
// console.log(Out);

console.log(WhatDoYouDo('john doe','teacher'));

//function scope
var text='hello world';
function fakerText(){
    text='nice';
    console.log(text);
}
fakerText();

//IIFE-Immediately Invoked Function Expression
(function(){
    console.log('hello');
})();

//callback function
function twice(num,fun){
    let result=fun(num);
    return result*2;
}

var value=twice(5,function(x){
    return x+1;
});

console.log(value);

//rest parameter
function add(a,b,...c){
    console.log(c);
}

add(1,2,3,4,5);