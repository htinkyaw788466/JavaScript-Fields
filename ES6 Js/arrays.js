const user={
    fullName:'bob smith',
    age:22,
    hobbies:['hiking','guitar']
}

console.log(typeof user);
for(p in user){
    console.log(`${p} is ${user[p]}`);
}

const fruits=['apple','orange','banana'];
const numbers=Array(24,25,26);

//add some array
fruits[5]='mango';
console.log(fruits);

//array push
fruits.push('greenbarry');
console.log(fruits);

//array pop
fruits.pop('greenbarry');
console.log(fruits);

//array unshift
fruits.unshift('redbarry');
console.log(fruits);

//array shift
fruits.shift('redbarry');
console.log(fruits);

const people=[
    {
        'name':'bob smith'
    },
    {
        'name':'ali','gender':'M'
    },
    {
        'name':'taylar','gender':'F'
    },
    {
        'name':'william','gender':'m'
    },
    {
        'name':'kati','gender':'f'
    }
];

console.log(typeof people);

// let result=people.map((person)=>{
//     if(person.gender){
//         if(person.gender==='m'||person.gender==='M'){
//             person.gender='Male';
//         }

//         if(person.gender==='f'||person.gender==='F'){
//             person.gender='Female';
//         }
//     }else{
//         person.gender='unknown';
//     }
//     return person;
// });

// let result=people.map((person)=>{
//     if(person.gender==='m'||person.gender==='M'){
//         person.gender='Male';
//     }else if(person.gender==='f'||person.gender==='F'){
//         person.gender='Female';
//     }else{
//         person.gender='unknown';
//     }
//     return person;
// });

let result=people.map((person)=>{
    switch (person.gender) {
        case 'm':
        case  'M':
            person.gender='Male';               
            break;
        case 'f':
        case 'F':
            person.gender='Female';    
        default:
            person.gender='unknown';
            break;
    }
    return person;
});

console.log(result);