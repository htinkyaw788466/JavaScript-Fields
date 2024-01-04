var fullName='john doe';
var age=23;
var isMarried=false;

//sample/if/else
if(isMarried==false){
    console.log(fullName+' is a single');
}else{
    console.log(fullName+' is not a single');
}

//ternary operators
age>=18?console.log(fullName+' drinks beer'):console.log(fullName+' drinks juice');

//switch statement
var job='web developer';

switch (job) {
    case 'web developer':
        console.log(fullName+' is a web developer');
        break;
    case 'teacher':
        console.log(fullName+' is teacher');
    default:
        console.log(fullName+ ' is something.');
        break;
}